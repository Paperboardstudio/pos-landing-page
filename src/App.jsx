import "./App.css";
import Characteristics from "./components/Characteristics";
import HeroSection from "./components/HeroSection";
import LastSubscribeSection from "./components/LastSubscribeSection";
import Nav from "./components/Nav";
import PriceSection from "./components/PriceSection";
import Reviews from "./components/Reviews";
import Social from "./components/Social";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <div className="sm:p-10 p-2">
        <Characteristics className="" />
        <PriceSection />
        <Reviews />
        <LastSubscribeSection />
        <Social />
      </div>
    </>
  );
}

export default App;
