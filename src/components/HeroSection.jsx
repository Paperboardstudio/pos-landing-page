import imgPlaceholder from "../assets/imgPlaceholder.png";

function HeroSection() {
  return (
    <div className="flex flex-col justify-items-center items-center mt-20 mb-20">
      <h1 className="text-4xl sm:w-3/5 mb-4 font-medium ">
        Revoluciona el control de tu negocio
      </h1>
      <h2 className="text-xl sm:w-3/5 mb-6">
        Operaciones optimizadas, transacciones fluidas y análisis en tiempo real
      </h2>
      <button className="bg-slate-700 rounded p-1 text-slate-200 justify-center align-middle hover:text-slate-50 hover:bg-slate-900 hover:cursor-pointer active:text-white transition duration-150 ease-in-out hover:scale-105 active:scale-110">
        Empecemos
      </button>
      <div className="grid grid-cols-2 gap-10 mt-20">
        <img src={imgPlaceholder} className="w-70"></img>
        <img src={imgPlaceholder} className="w-70"></img>
      </div>
    </div>
  );
}

export default HeroSection;
