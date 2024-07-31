import { useState } from "react";
import PriceCard from "./PriceCard";

function PriceSection() {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <div>
      <div>
        <p>Montly</p>
        <p>Yearly</p>
      </div>
      <div>
        <PriceCard
          title="Basico"
          price="$25"
          list={["Gestión básica de inventarios", "Reporte de ventas diarios"]}
        />
      </div>
    </div>
  );
}

export default PriceSection;
