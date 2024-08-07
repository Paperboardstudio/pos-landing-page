import CharacteristicsCard from "./CharacteristicsCard";

function Characteristics() {
  return (
    <div id="characteristics">
      <p className="text-gray-700 text-xl flex flex-initial font-bold  ">
        Características Principales
      </p>
      <p className="text-gray-400 flex flex-initial">
        Descubre como Clarita puede transformar tu negocio
      </p>
      {/* gri for the characteristics */}
      <div className="grid sm:grid-cols-3">
        <CharacteristicsCard
          title="Manejo de Caja"
          description="Facilita la administracion de tu personal con herramientas integradas para la gestión del personal. Ahorra tiempo y reduce errores operativos."
        />
        <CharacteristicsCard
          title="Gestión de productos"
          description="Añade, elimina y actualiza productos, y precios de manera sencilla. Mantén tu inventario siempre actualizado."
        />
        <CharacteristicsCard
          title="Ventas y reportes"
          description="Realiza un seguimiento en tiempo real de las ventas y accede a informes completos y funcionalidades de análisis que te ayudarán a tomar decisiones informadas."
        />
        <CharacteristicsCard
          title="Interfaz amigable"
          description="Diseño intuitivo y fácil de usar tanto para administradores como para el personal, asegurando una rápida adaptación y eficiencia en el trabajo diario"
        />
        <CharacteristicsCard
          title="Seguridad"
          description="Protección de datos y transacciones confidenciales con las mejores prácticas de seguridad en la industria."
        />
        <CharacteristicsCard
          title="Integración con sistemas existentes"
          description="Conecta fácilmente Clarita con tus sistemas actuales para una oepración sin interrupciones."
        />
      </div>
    </div>
  );
}

export default Characteristics;
