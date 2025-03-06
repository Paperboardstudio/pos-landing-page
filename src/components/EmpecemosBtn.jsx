import { useContext } from "react";
import { CartContext } from "./context/cart-context";
import { useNavigate } from "react-router-dom";

function EmpecemosBtn({ title, price }) {
  const { addProduct, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  function handleSubscription() {
    // so we can only have 1 subscription
    clearCart();

    // Add a subscription to cart
    addProduct({
      id: title,
      title: title,
      price: parseFloat(price.replace("$", "")), // takes off the dollar sign
      quantity: 1, //subscription is always 1 item
    });

    // Redirect to Checkoutpage
    navigate("/checkout");
  }
  return (
    <div>
      <button
        className="bg-orange-500 rounded p-1 text-slate-50 hover:text-white hover:bg-orange-600 hover:cursor-pointer active:text-white transition duration-150 ease-in-out hover:scale-105 active:scale-110 text-center"
        onClick={handleSubscription}
      >
        Empecemos
      </button>
    </div>
  );
}

export default EmpecemosBtn;
