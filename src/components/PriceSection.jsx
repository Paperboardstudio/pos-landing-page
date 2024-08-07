import { useState } from "react";
import PriceCard from "./PriceCard";

function PriceSection() {
  const [isMonthly, setIsMonthly] = useState(true);
  function changeToIsMonthly() {
    setIsMonthly(true);
  }
  function changeToIsNotMonthly() {
    setIsMonthly(false);
  }

  return (
    <div
      id="price"
      className="w-full mt-16 flex justify-center flex-col items-center self-center content-center"
    >
      <div className="w-full ">
        <div className="flex gap-4 justify-center mb-12">
          <button
            onClick={changeToIsMonthly}
            className={
              isMonthly === true
                ? "bg-slate-900 rounded p-1 text-white"
                : "bg-slate-400 rounded p-1 text-slate-100"
            }
          >
            Mensual
          </button>
          <button
            onClick={changeToIsNotMonthly}
            className={
              isMonthly === false
                ? "bg-slate-900 rounded p-1 text-white"
                : "bg-slate-400 rounded p-1 text-slate-100"
            }
          >
            Anual
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center">
        {isMonthly ? (
          <div className="flex gap-2 sm:gap-8 justify-center">
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
          <div className="flex gap-8 justify-center">
            <PriceCard
              title="Basico Anual"
              price="$19"
              list={[
                "Facturado una vez al año",
                "Gestión básica de inventarios",
                "Reporte de ventas diarios",
                "Soporte técnico estándar",
                "Acceso a actualizaciones de software",
                "Administrador y caja",
              ]}
            />
            <PriceCard
              title="Pro Anual"
              price="$59"
              list={[
                "Facturado una vez al año",
                "Todas las características del Plan Básico",
                "Reportes de ventas avanzados",
                "Soporte técnico prioritario",
                "Integraciones con otros sistemas",
                "Administrador, caja, mesero y cocina",
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PriceSection;
