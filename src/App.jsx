import "./App.css";
import Characteristics from "./components/Characteristics";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div>
        <Nav />
        <HeroSection />
        <Characteristics />
      </div>
    </>
  );
}

export default App;
