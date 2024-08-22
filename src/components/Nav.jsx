import imgPlaceholder from "../assets/imgPlaceholder.png";
import logo1 from "../assets/claritapplogo_black.png";
import EmpecemosBtn from "./EmpecemosBtn";

function Nav() {
  function locate(section) {
    window.location.replace(`#${section}`);
  }

  return (
    <div className="grid grid-cols-2 shadow-md pb-4 sm:px-4 mt-4 w-full my-0 text-xs sm:text-base">
      <div className="left-side flex items-center ml-2">
        <img
          src={logo1}
          className="sm:w-36 w-16  flex align-middle justify-center"
        ></img>
      </div>
      <div className="right-side flex justify-end text-sm sm:text-lg">
        <ul className="flex sm:gap-4 gap-2 items-center mr-2">
          <li
            onClick={() => locate("characteristics")}
            className=" hover:text-orange-500 hover:cursor-pointer active:text-orange-700 transition duration-150 ease-in-out"
          >
            Soluciones
          </li>
          <li
            onClick={() => locate("price")}
            className="hover:text-orange-500 hover:cursor-pointer active:text-orange-700 transition duration-150 ease-in-out"
          >
            Precio
          </li>
          <li
            onClick={() => locate("reviews")}
            className="hover:text-orange-500 hover:cursor-pointer active:text-orange-700 transition duration-150 ease-in-out"
          >
            Comunidad
          </li>
          <li className="flex ">
            <EmpecemosBtn />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
