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
        <div className="content flex flex-col justify-items-center items-center w-full">
          <h1 className="text-4xl sm:w-3/5 mb-4 font-medium ">
            Revoluciona el control de tu negocio
          </h1>
          <h2 className="text-xl sm:w-3/5 mb-6">
            Operaciones optimizadas, transacciones fluidas y análisis en tiempo
            real
          </h2>
          <EmpecemosBtn />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-12 mt-20 w-full p-10">
        <img
          src={cap1}
          className="w-full h-64 hover:scale-110 transition duration-300 rounded"
        ></img>
        <img
          src={cap2}
          className="w-full h-64 hover:scale-110 transition duration-300 rounded"
        ></img>
      </div>
    </div>
  );
}

export default HeroSection;
