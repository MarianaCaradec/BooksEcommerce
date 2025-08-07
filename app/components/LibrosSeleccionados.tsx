import Image from "next/image";
import React from "react";

const LibrosSeleccionados = () => {
  return (
    <div className="text-[#AF611E]">
      <h2 className="text-3xl font-bold">Libros destacados</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col items-start">
          <Image
            src="/Quiroga-1.jpg"
            alt="Producto destacado"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <h3 className="text-xl font-semibold mt-4">Producto destacado</h3>
          <p className="mt-2 text-sm text-black">
            Descripción del producto destacado.
          </p>
          <p className="mt-2 text-lg font-bold">$10,99</p>
        </div>
        <div className="grid grid-rows-2 gap-6">
          <div className="flex flex-col items-start">
            <Image
              src="/rayuela.webp"
              alt="Producto 1"
              width={300}
              height={200}
              className="w-full h-auto"
            />
            <h3 className="text-lg font-semibold mt-4">Producto</h3>
            <p className="mt-2 text-sm text-black">
              Descripción del producto principal.
            </p>
            <p className="mt-2 text-lg font-bold">$10,99</p>
          </div>
          <div className="flex flex-col items-start">
            <Image
              src="/bocasDelTiempo.jpeg"
              alt="Producto 2"
              width={300}
              height={200}
              className="w-full h-auto"
            />
            <h3 className="text-lg font-semibold mt-4">Producto</h3>
            <p className="mt-2 text-sm text-black">
              Descripción del producto de menor categoría.
            </p>
            <p className="mt-2 text-lg font-bold">$10,99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrosSeleccionados;
