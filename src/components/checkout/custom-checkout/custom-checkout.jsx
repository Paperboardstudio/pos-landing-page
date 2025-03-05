import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router-dom";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { fetchFromAPI } from "../../../helper";
import { useNavigate } from "react-router-dom";

// , history: { push }
function CustomCheckout({ shipping, cartItems }) {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    const items = cartItems.map((item) => ({
      price: item.price,
      quantity: item.quantity,
    }));
    if (shipping) {
      const body = {
        cartItems: items,
        shipping: {
          name: shipping.name,
          address: { line1: shipping.address },
        },
        description: "payment intent for claritapp",
        receipt_email: shipping.email,
      };

      const customCheckout = async () => {
        const { clientSecret } = await fetchFromAPI("create-payment-intent", {
          body,
        });

        setClientSecret(clientSecret);
      };

      customCheckout();
    }
  }, [shipping, cartItems]);

  const handleCheckout = async () => {
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
      },
    });
    if (payload.error) {
      setError(`Payment Failed: ${payload.error.message}`);
    } else {
      navigate("/success");
    }
  };

  const cardHandleChange = (event) => {
    const { error } = event;
    setError(error ? error.message : "");
  };

  const cardStyle = {
    style: {
      base: {
        color: "#000",
        fontFamily: "roboto, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#606060",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <div className="flex flex-col gap-4 md:w-1/4 mx-auto">
      <h4>Enter Payment Details</h4>
      <div className="stripe-card ">
        <CardNumberElement
          className="card-element border border-gray-800 px-1"
          options={cardStyle}
          onChange={cardHandleChange}
        />
      </div>

      <div className="stripe-card border border-gray-800 px-1">
        <CardExpiryElement
          className="card-element"
          options={cardStyle}
          onChange={cardHandleChange}
        />
      </div>

      <div className="stripe-card border border-gray-800 px-1">
        <CardCvcElement
          className="card-element"
          options={cardStyle}
          onChange={cardHandleChange}
        />
      </div>

      <div className="submit-btn">
        <button
          disabled={processing}
          className="button is-black nomad-btn submit p-2 px-8 rounded-md bg-slate-700 text-slate-100"
          onClick={() => handleCheckout()}
        >
          {processing ? "PROCESSING" : "PAY"}
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default CustomCheckout;
