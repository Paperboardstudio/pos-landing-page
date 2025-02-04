import { Elements } from "@stripe/react-stripe-js";
import StripeCheckout from "./StripeCheckout";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

function CheckoutPage() {
  return (
    <Elements stripe={stripePromise}>
      <StripeCheckout />
    </Elements>
  );
}

export default CheckoutPage;
