function PriceCard({ title, price, list }) {
  // const [isMonthly, setIsMonthly] = useState(true);
  console.log("Rendering PriceCard with title:", title, price, list);
  return (
    <div className="border border-slate-300 p-8 pr-20 mb-4">
      <p className="font-medium">{title}</p>
      <div className="flex text-center items-center justify-center">
        <p className="text-2xl font-bold">{price}</p>
        <span className="text-sm">/mes</span>
      </div>
      <ul className="mb-12">
        {list.map((item, index) => (
          <li key={index} className="font-thin text-xs text-left">
            &#8226; {item}
          </li>
        ))}
      </ul>
      <button className="bg-slate-300 w-4/5 text-sm rounded p-1 text-center hover:bg-slate-600 hover:text-slate-100 active:bg-slate-800 active:text-slate-50">
        Empecemos
      </button>
    </div>
  );
}

export default PriceCard;
