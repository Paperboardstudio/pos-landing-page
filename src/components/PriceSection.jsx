import { useState } from "react";
import PriceCard from "./PriceCard";

function PriceSection() {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <div className="mt-16">
      <div className="flex gap-6 justify-center mb-12">
        <button>Mensual</button>
        <button>Anual</button>
      </div>
      <div>
        {isMonthly ? (
          <div className="flex gap-8 justify-center">
            <PriceCard
              title="Basico"
              price="$25"
              list={[
                "Gestión básica de inventarios",
                "Reporte de ventas diarios",
                "Soporte técnico estándar",
                "Acceso a actualizaciones de software",
                "Administrador y caja",
              ]}
            />
            <PriceCard
              title="Pro"
              price="$75"
              list={[
                "Todas las características del Plan Básico",
                "Reportes de ventas avanzados",
                "Soporte técnico prioritario",
                "Integraciones con otros sistemas",
                "Administrador, caja, mesero y cocina",
              ]}
            />
          </div>
        ) : (
          <PriceCard
            title="Basico Anual"
            price="$XX"
            list={[
              "Gestión básica de inventarios",
              "Reporte de ventas diarios",
            ]}
          />
        )}
      </div>
    </div>
  );
}

export default PriceSection;
