// components/NavBar.tsx
"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Podemos definir los enlaces en una variable común para reutilizarlos
  const links = (
    <>
      <li>
        <Link
          href="#philosophy"
          className="text-sm md:text-lg font-medium border-b-2 border-transparent hover:border-white transition-colors pb-1"
          onClick={() => setIsOpen(false)}
        >
          Philosophy
        </Link>
      </li>
      <li>
        <Link
          href="#work"
          className="text-sm md:text-lg font-medium border-b-2 border-transparent hover:border-white transition-colors pb-1"
          onClick={() => setIsOpen(false)}
        >
          My Work
        </Link>
      </li>
      <li>
        <Link
          href="#contact"
          className="text-sm md:text-lg font-medium border-b-2 border-transparent hover:border-white transition-colors pb-1"
          onClick={() => setIsOpen(false)}
        >
          Contact Me
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-[#a16a6a] hover:bg-[#c26868] transition-colors text-white sticky top-0 z-50">
      <div className="container mx-auto py-3 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={80} height={80} />
          <h3 className="text-md md:text-lg font-medium">
            ${`{["think", "design", "develop"]}`}
          </h3>
        </div>
        {/* Menú de navegación desktop */}
        <ul className="hidden sm:flex gap-4">
          {links}
        </ul>
        {/* Botón de hamburguesa para mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {/* Menú de navegación mobile */}
      {isOpen && (
        <ul className="sm:hidden flex flex-col gap-4 bg-[#a16a6a] p-4">
          {links}
        </ul>
      )}
    </nav>
  );
}
