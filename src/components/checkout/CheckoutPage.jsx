import { Elements } from "@stripe/react-stripe-js";
import StripeCheckout from "./StripeCheckout";
import { CartContext } from "../context/cart-context";
import { loadStripe } from "@stripe/stripe-js";
import ShippingAddress from "./custom-checkout/Shipping-address";
import { useContext, useState } from "react";
import CustomCheckout from "./custom-checkout/custom-checkout";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

function CheckoutPage() {
  const { itemCount, total, cartItems } = useContext(CartContext);
  const [shipping, setShipping] = useState(null);
  const addressShown = {
    display: shipping ? "none" : "block",
  };
  const cardShown = { display: shipping ? "block" : "none" };

  return (
    <Elements stripe={stripePromise}>
      {/* <StripeCheckout /> */}
      <div style={addressShown}>
        <ShippingAddress setShipping={setShipping} />
      </div>
      <div style={cardShown}>
        <CustomCheckout {...{ shipping, cartItems }} />
      </div>
    </Elements>
  );
}

export default CheckoutPage;
