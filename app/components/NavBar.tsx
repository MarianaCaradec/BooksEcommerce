"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const router = usePathname();
  const isHomePage = router === "/";

  return (
    <nav
      className={`flex items-center justify-between px-6 py-4 w-full ${
        isHomePage
          ? "absolute z-20 text-[#CFAC91]"
          : "relative bg-white text-[#AF611E] shadow-md"
      }`}
    >
      <div>
        <Link href="/" className="text-2xl p-2 rounded-lg font-bold">
          Texere
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <ul className="md:flex items-center justify-around">
          <li className="hover:text-[#AF611E] hover:bg-[#CFAC91] p-2 rounded-lg font-bold transition-color duration-200 cursor-pointer">
            <Link href="/sobreNosotros">Sobre nosotros</Link>
          </li>
          <li className="hover:text-[#AF611E] hover:bg-[#CFAC91] p-2 rounded-lg font-bold transition-color duration-200 cursor-pointer">
            <Link href="/libros">Libros</Link>
          </li>
          <li className="hover:text-[#AF611E] hover:bg-[#CFAC91] p-2 rounded-lg font-bold transition-color duration-200 cursor-pointer">
            <Link href="/reseñas">Reseñas</Link>
          </li>
          <li className="hover:text-[#AF611E] hover:bg-[#CFAC91] p-2 rounded-lg font-bold transition-color duration-200 cursor-pointer">
            <Link href="/contacto">Contacto</Link>
          </li>
          <li className="hover:text-[#AF611E] hover:bg-[#CFAC91] p-2 rounded-lg font-bold transition-color duration-200 cursor-pointer">
            <Link href="/envios">Envios</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-2">
          <button className="hover:bg-[#AF611E] rounded-lg p-2 transition-color duration-200 cursor-pointer">
            {" "}
            <Link href="/ingresar">Ingresar</Link>{" "}
          </button>
          <button className="hover:bg-[#AF611E] rounded-lg p-2 transition-color duration-200 cursor-pointer">
            <Link href="/cart">Carrito</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
