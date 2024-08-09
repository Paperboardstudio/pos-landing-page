import EmpecemosBtn from "./EmpecemosBtn";

function PriceCard({ title, price, list }) {
  // const [isMonthly, setIsMonthly] = useState(true);
  console.log("Rendering PriceCard with title:", title, price, list);
  return (
    <div className="border border-slate-300 sm:p-8 p-2 mb-4 grid h-full items-center w-full box-border">
      <p className="font-medium sm:text-base text-sm">{title}</p>
      <div className="flex text-center items-center justify-center">
        <p className="text-2xl font-bold">{price}</p>
        <span className="text-sm">/mes</span>
      </div>
      {/* had to use flex-grow to push the button */}
      <ul className="mb-12 flex-grow">
        {list.map((item, index) => (
          <li key={index} className=" sm:text-xs text-xs  text-left">
            &#8226; {item}
          </li>
        ))}
      </ul>
      <EmpecemosBtn className="text-center mt-auto" />
      {/* <button className="bg-slate-300 w-4/5 text-sm rounded p-1  hover:bg-slate-600 hover:text-slate-100 active:bg-slate-800 active:text-slate-50 text-center mt-auto ">
        Empecemos
      </button> */}
    </div>
  );
}

export default PriceCard;
