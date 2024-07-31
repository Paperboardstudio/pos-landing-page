function PriceCard({ title, price, list }) {
  // const [isMonthly, setIsMonthly] = useState(true);
  return (
    <div>
      <p>{title}</p>
      <div>
        <p className="text-lg font-bold">{price}</p>
        <span className="text-sm">/mes</span>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PriceCard;
