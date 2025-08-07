import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-around p-8 min-h-screen">
      <div className="flex items-end justify-center w-full md:w-1/2">
        <Image
          src="/sobreNosotros.jpg"
          width={400}
          height={500}
          alt="Background Image"
          className="object-contain"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-9 text-left w-full md:w-1/2">
        <p className="text-lg md:text-xl font-semibold px-10">
          En un mundo que avanza a ritmo vertiginoso, nos detenemos a honrar
          aquello que nunca pasa de moda: las historias que nos transforman, los
          libros que nos eligen. <br />
          Texere nace del amor por la lectura y el deseo profundo de compartir
          mundos. No vendemos solo libros: ofrecemos refugios, ventanas,
          caminos. Elegimos cada título con el cuidado de quien prepara un
          regalo. Nos guían la calidad, la belleza y la pasión por el detalle.{" "}
          <br />
          Queremos que cada lector —curioso, ávido, ocasional o empedernido—
          encuentre aquí algo más que papel y tinta: una experiencia cálida,
          cercana y auténtica. <br />
          Gracias por acompañarnos en este viaje donde cada página es una
          promesa y cada historia, un nuevo comienzo.
        </p>
        <button className="bg-[#AF611E] hover:bg-[#CFAC91] hover:text-[#AF611E] text-white font-semibold py-2 px-4 rounded-lg transition">
          <Link href="/libros">Tu próxima lectura favorita.</Link>
        </button>
      </div>
    </div>
  );
};

export default page;
