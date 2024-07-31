import imgPlaceholder from "../assets/imgPlaceholder.png";

function HeroSection() {
  return (
    <div className="flex flex-col justify-items-center items-center mt-20">
      <h1 className="text-4xl w-2/5 mb-4  ">
        Revoluciona el control de tu negocio
      </h1>
      <h2 className="text-xl w-2/5 mb-6">
        Operaciones optimizadas, transacciones flidas y analisis en tiempo real
      </h2>
      <button className="bg-slate-700 text-slate-100 rounded p-1 hover:text-yellow-400 hover:cursor-pointer active:text-yellow-700 transition duration-150 ease-in-out">
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
