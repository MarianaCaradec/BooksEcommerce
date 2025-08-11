import Image from "next/image";
import Link from "next/link";
import LibrosSeleccionados from "./components/LibrosSeleccionados";
import ReseñasEnviosContacto from "./components/ReseñasEnviosContacto";

export default function Home() {
  return (
    <div className="font-serif">
      <div className="relative min-h-screen text-[#CFAC91]">
        <Image
          src="/about-us2.png"
          alt="About Us"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 -z-10"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="flex-grow flex items-center justify-center p-8 relative z-10 drop-shadow-[2px_2px_0px_#000]">
          <section className="flex flex-col justify-center items-center h-screen text-center">
            <h1 className="text-4xl md:text-6xl">
              ¡Te damos la bienvenida a Texere Libros!
            </h1>
            <h2 className="text-lg md:text-2xl mt-4">
              El lugar donde tu imaginación cobra vida a través de las palabras.
            </h2>
            <h3 className="text-base md:text-xl mt-7">
              Explora nuestra colección de libros, descubre reseñas y sumérgete
              en un mundo de historias cautivadoras a un click de distancia.
            </h3>
            <Link
              href="/sobreNosotros"
              className="mt-6 px-6 py-3 bg-[#AF611E] hover:bg-[#CFAC91] hover:text-[#AF611E] transition rounded-lg"
            >
              Descubre más sobre nosotros
            </Link>
          </section>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center p-8 relative z-10 bg-white bg-opacity-80">
        <section>
          <LibrosSeleccionados />
        </section>
      </div>
      <div className="flex-grow flex items-center justify-center p-8 relative z-10 bg-gradient-to-b from-[#BF9A7C] via-[#BF9A7C]/80 to-transparent">
        <section>
          <ReseñasEnviosContacto />
        </section>
      </div>
    </div>
  );
}
