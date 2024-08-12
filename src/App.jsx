import "./App.css";
import Characteristics from "./components/Characteristics";
import Contact from "./components/Contact";
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
      <div className="sm:p-10 p-2 grid items-center justify-center box-border w-full">
        <Characteristics className="" />

        <PriceSection />
        <Reviews />

        <LastSubscribeSection />
        {/* <Social /> */}
        <Contact />
      </div>
    </>
  );
}

export default App;
