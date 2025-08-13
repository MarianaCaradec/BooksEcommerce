export default function page() {
  const fakeReviews = [
    {
      name: "Lucía Fernández",
      review:
        "Una experiencia maravillosa. Los libros llegaron rápido y en perfecto estado.",
      rating: 5,
    },
    {
      name: "Tomás Herrera",
      review: "Buena selección, aunque me gustaría ver más títulos clásicos.",
      rating: 4,
    },
    {
      name: "Sofía Gómez",
      review:
        "El diseño del sitio es hermoso y fácil de navegar. ¡Muy recomendable!",
      rating: 5,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#CFC5BA] via-[#BF9A7C]/80 to-white min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#AF611E] mb-10 text-center">
          Reseñas
        </h1>

        <div className="space-y-8">
          {fakeReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#AF611E]"
              style={{ backgroundColor: "#CFAC91" }}
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                {review.name}
              </h2>
              <p className="text-black mb-4">{review.review}</p>
              <div className="flex items-center gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#AF611E"
                    viewBox="0 0 24 24"
                    width="20px"
                    height="20px"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
