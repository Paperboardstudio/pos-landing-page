import ReviewCard from "./ReviewCard";

function Reviews() {
  return (
    <div className="flex sm:gap-12 gap-2 mt-12 justify-center">
      <ReviewCard
        title="Excelente sistema"
        review="Este POS ha mejorado significativamente la eficiencia de nuestro restaurante. Muy fácil de usar y con un soporte técnico excelente."
        user="Carlos Mendoza"
        date="25-07-2024"
        profilePic
      />
      <ReviewCard
        title="Muy Recomendable"
        review="Las funcionalidades de análisis y reportes nos han ayudado a tomar mejores decisiones de negocio. Altamente recomendable"
        user="Ana Rodríguez"
        date="20-07-2024"
        profilePic=""
      />
    </div>
  );
}

export default Reviews;
