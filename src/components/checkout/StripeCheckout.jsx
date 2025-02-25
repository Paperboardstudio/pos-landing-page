import React, { useContext, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { CartContext } from "../../components/context/cart-context";
import { fetchFromAPI } from "../../helper";

function StripeCheckout() {
  const [email, setEmail] = useState("");
  const { cartItems } = useContext(CartContext);
  const stripe = useStripe();
  const handleGuestCheckout = async (e) => {
    e.preventDefault();
    // i have to update this with the product
    const line_items = cartItems.map((item) => {
      console.log("items:", item);
      return {
        quantity: item.quantity,
        price_data: {
          currency: "usd",
          unit_amount: item.price * 100, // amount is in cents
          product_data: {
            name: item.title,
            description: item.description,
            images: [item.imageUrl],
          },
        },
      };
    });
    const response = await fetchFromAPI("create-checkout-session", {
      body: { line_items, customer_email: email },
    });

    const { sessionId } = response;
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleGuestCheckout}>
        <div>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
            className=""
          ></input>
        </div>
        <button>Checkout</button>
      </form>
    </>
  );
}

export default StripeCheckout;
