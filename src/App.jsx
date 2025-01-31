import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Characteristics from "./components/Characteristics";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Homepage from "./components/Homepage";
import LastSubscribeSection from "./components/LastSubscribeSection";
import Nav from "./components/Nav";
import PriceSection from "./components/PriceSection";
import Reviews from "./components/Reviews";
import Social from "./components/Social";
import CheckoutPage from "./components/checkout/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Homepage /> */}
    </>
  );
}

export default App;
