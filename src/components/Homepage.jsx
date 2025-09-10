import Characteristics from "./Characteristics";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import LastSubscribeSection from "./LastSubscribeSection";
import Nav from "./Nav";
import PriceSection from "./PriceSection";
import Reviews from "./Reviews";
import Social from "./Social";

function Homepage() {
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

export default Homepage;
