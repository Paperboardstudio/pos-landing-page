import imgPlaceholder from "../assets/imgPlaceholder.png";

function Nav() {
  return (
    <div className="grid grid-cols-2 shadow-md pb-4 px-4  w-2/2 my-0 text-xs sm:text-base">
      <div className="left-side">
        <img src={imgPlaceholder} className="w-10"></img>
      </div>
      <div className="right-side flex justify-end">
        <ul className="flex sm:gap-4 gap-1 items-center">
          <li className="hover:text-orange-500 hover:cursor-pointer active:text-orange-700 transition duration-150 ease-in-out">
            Soluciones
          </li>
          <li className="hover:text-orange-500 hover:cursor-pointer active:text-orange-700 transition duration-150 ease-in-out">
            Precio
          </li>
          <li className="hover:text-orange-500 hover:cursor-pointer active:text-orange-700 transition duration-150 ease-in-out">
            Comunidad
          </li>
          <li className="flex ">
            <button className="bg-slate-800 rounded p-1 text-white justify-center align-middle hover:text-yellow-400 hover:cursor-pointer active:text-yellow-700 transition duration-150 ease-in-out">
              Empecemos
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
