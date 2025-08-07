import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReseñasEnviosContacto = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-10 w-full p-8">
      <div className="flex flex-col gap-4 md:w-1/2 items-start justify-center">
        <section className="flex flex-col items-start space-y-2">
          <div className="flex space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 5m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              <path d="M14 7l6 0" />
              <path d="M14 11l6 0" />
              <path d="M4 15l16 0" />
              <path d="M4 19l16 0" />
            </svg>

            <h3>Reseñas</h3>
          </div>
          <p>Descrubre las opiniones de nuestros clientes más queridos.</p>
          <Link href="/reseñas">Ver reseñas</Link>
        </section>
        <section className="flex flex-col items-start space-y-2">
          <div className="flex space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
              <path d="M3 9l4 0" />
            </svg>

            <h3>Envios</h3>
          </div>
          <p>Calcula envío del libro que desees.</p>
          <Link href="/envio">Calcular envio</Link>
        </section>
      </div>

      <div className="flex flex-col gap-4 md:w-1/2 space-y-4">
        <section className="space-y-2 flex flex-col items-start">
          <div className="flex items-start justify-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" />
              <path d="M11.5 19h-6.5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5" />
              <path d="M3 7l9 6l9 -6" />
            </svg>

            <h3>Contacto</h3>
          </div>

          <p>Contactanos para más consultas</p>
          <Link href="/contacto">Contactar</Link>
        </section>
        <section className="flex items-end justify-center w-full">
          <Image
            src="/principito.webp"
            width={500}
            height={700}
            alt="Team Image"
            className="object-contain"
          />
        </section>
      </div>
    </div>
  );
};

export default ReseñasEnviosContacto;
