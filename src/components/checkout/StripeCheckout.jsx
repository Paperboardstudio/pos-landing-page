import React, { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { fetchFromAPI } from "../../helper";

function StripeCheckout() {
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const handleGuestCheckout = () => {
    e.preventDefault();
    // i have to update this with the product
    const line_items = {
      quantity: 1,
      price_date: { currency: "usd" },
      unit_amount: 35 * 100, //amount is in cents which is why has to be multitplied. I am not sure about this aprt so i need to test
      product_data: {
        name: "asd", //item title
        description: "just a test product", //replace this alter
        // images: [itemimage]`
      },
    };
  };

  return (
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
  );
}

export default StripeCheckout;
