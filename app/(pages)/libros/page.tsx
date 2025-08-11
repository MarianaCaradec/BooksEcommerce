import React from "react";

const page = () => {
  const mockBooks = [
    {
      title: "El Jardín de las Mariposas",
      author: "Clara Méndez",
      category: "Ficción",
      description:
        "Una historia poética sobre la resiliencia y el poder de la naturaleza.",
    },
    {
      title: "Códigos del Silencio",
      author: "Martín Ríos",
      category: "Thriller",
      description:
        "Un investigador descubre secretos ocultos en una ciudad que nunca duerme.",
    },
    {
      title: "Sabores del Sur",
      author: "Ana López",
      category: "Gastronomía",
      description:
        "Recetas tradicionales con un toque moderno, directo desde la Patagonia.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-[#BF9A7C]/80 to-white min-h-screen font-serif">
      <div className="max-w-4xl mx-auto p-6 py-20">
        <main>
          <h1 className="text-3xl font-bold text-[#AF611E] mb-6">Books</h1>

          {/* Search Bar */}
          <div className="flex items-center justify-center gap-3 py-5">
            <input
              placeholder="search by title, author or category"
              name="text"
              type="text"
              // onChange={(e) => setInputSearch(e.target.value)}
              // value={inputSearch}
              className="bg-[#CFAC91] text-black text-lg rounded-md placeholder-black p-4 w-full max-w-md shadow-md"
            />
            <button
              //   onClick={() => handleSearch(inputSearch)}
              className="hover:scale-105 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="25px"
                width="25px"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth={1.5}
                  stroke="#000"
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                />
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth={1.5}
                  stroke="#000"
                  d="M22 22L20 20"
                />
              </svg>
            </button>
          </div>

          {/* Category Select */}
          <select
            //   onChange={(e) => {
            //     handleSelect(e.target.value);
            //   }}
            //   value={categoryId}
            className="bg-[#AF611E] text-[#E4DFDA] p-4 rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer transition"
          >
            <option value={""}>All books</option>
            {/* {categories &&
            categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))} */}
          </select>

          {/* Book List */}
          <div className="grid gap-8 md:grid-cols-2 py-10">
            {mockBooks.map((book, index) => (
              <div
                key={index}
                className="rounded-lg shadow-md p-6 border-l-4 border-[#AF611E]"
                style={{ backgroundColor: "#CFAC91" }}
              >
                <h2 className="text-2xl font-semibold text-[#AF611E] mb-2">
                  {book.title}
                </h2>
                <p className="text-[#AF611E] italic mb-1">
                  Autor: {book.author}
                </p>
                <p className="text-[#AF611E] font-medium mb-3">
                  Categoría: {book.category}
                </p>
                <p className="text-black">{book.description}</p>
              </div>
            ))}
          </div>
          {/* <Books /> */}
        </main>
      </div>
    </div>
  );
};

export default page;
