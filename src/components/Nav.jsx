import imgPlaceholder from "../assets/imgPlaceholder.png";

function Nav() {
  return (
    <div className="grid grid-cols-2 ">
      <div className="left-side">
        <img src={imgPlaceholder} className="w-10"></img>
      </div>
      <div className="right-side">
        <ul className="flex gap-4">
          <li>Soluciones</li>
          <li>Precio</li>
          <li>Comunidad</li>
          <li>
            <button className="bg-slate-800 rounded p-1 text-white">
              Empecemos
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
