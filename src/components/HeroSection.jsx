import imgPlaceholder from "../assets/imgPlaceholder.png";
import banner from "../assets/bannerclarita.jpg";
import cap1 from "../assets/cap1.png";
import cap2 from "../assets/cap2.png";
import "./HeroSection.css";
import EmpecemosBtn from "./EmpecemosBtn";

function HeroSection() {
  return (
    <div
      className="flex flex-col justify-items-center items-center mt-20 mb-20
    
	
    "
    >
      <div
        id="bgImg"
        className="hero-section flex flex-col justify-items-center items-center 
        w-full
       
        "
      >
        <div className="content flex flex-col justify-items-center items-center w-full h-ful py-6">
          <h1 className="py-4 text-3xl sm:text-6xl sm:w-4/5 mb-4 font-medium ">
            Revoluciona el control de tu negocio
          </h1>
          <h2 className="sm:text-2xl text-xl sm:w-3/5 mb-8">
            Operaciones optimizadas, transacciones fluidas y análisis en tiempo
            real
          </h2>
          <EmpecemosBtn />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-12 m-auto mt-20 w-full p-10 place-items-center">
        <img
          src={cap1}
          className="sm:w-4/5 w-full sm:h-80 h-64 hover:scale-110 transition duration-300 rounded"
        ></img>
        <img
          src={cap2}
          className="sm:w-4/5 w-full sm:h-80 h-64 hover:scale-110 transition duration-300 rounded"
        ></img>
      </div>
    </div>
  );
}

export default HeroSection;
