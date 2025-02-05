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
import Success from "./components/checkout/Success";
import Canceled from "./components/checkout/Canceled";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/canceled",
    element: <Canceled />,
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
