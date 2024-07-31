import "./App.css";
import Characteristics from "./components/Characteristics";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import PriceSection from "./components/PriceSection";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <div>
        <Nav />
        <HeroSection />
        <Characteristics />
        <PriceSection />
        <Reviews />
      </div>
    </>
  );
}

export default App;
