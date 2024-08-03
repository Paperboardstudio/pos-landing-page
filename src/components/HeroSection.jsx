import imgPlaceholder from "../assets/imgPlaceholder.png";
import banner from "../assets/bannerclarita.jpg";
import cap1 from "../assets/cap1.png";
import cap2 from "../assets/cap2.png";

function HeroSection() {
  return (
    <div
      className="flex flex-col justify-items-center items-center mt-20 mb-20
    bg-no-repeat bg-cover bg-center
		bg-[url('../bannerclarita.jpg')]
    "
    >
      <h1 className="text-4xl sm:w-3/5 mb-4 font-medium ">
        Revoluciona el control de tu negocio
      </h1>
      <h2 className="text-xl sm:w-3/5 mb-6">
        Operaciones optimizadas, transacciones fluidas y análisis en tiempo real
      </h2>
      <button className="bg-slate-700 rounded p-1 text-slate-200 justify-center align-middle hover:text-slate-50 hover:bg-slate-900 hover:cursor-pointer active:text-white transition duration-150 ease-in-out hover:scale-105 active:scale-110">
        Empecemos
      </button>
      <div className="grid grid-cols-2 gap-12 mt-20">
        <img
          src={cap1}
          className="w-80 h-44 hover:scale-110 transition duration-300 rounded"
        ></img>
        <img
          src={cap2}
          className="w-80 h-44 hover:scale-110 transition duration-300 rounded"
        ></img>
      </div>
    </div>
  );
}

export default HeroSection;
