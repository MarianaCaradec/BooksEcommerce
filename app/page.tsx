import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
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
            Explora nuestra colección de libros, descubre reseñas y sumérgete en
            un mundo de historias cautivadoras a un click de distancia.
          </h3>
          <Link
            href="/sobreNosotros"
            className="mt-6 px-6 py-3 bg-[#AF611E] hover:bg-[#CFAC91] hover:text-[#AF611E] transition rounded-lg"
          >
            Descubre más sobre nosotros
          </Link>
        </section>

        <section> {/* <Libros /> */}</section>
        <section> {/* <LibrosSeleccionados /> */}</section>
        <section>{/* <ReseñasEnviosContacto /> */}</section>
      </div>
      {/* <footer className="flex flex-wrap items-center justify-center relative z-20 gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
