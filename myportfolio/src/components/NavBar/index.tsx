// components/NavBar.tsx
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-[#a16a6a] hover:bg-[#c26868] transition-colors text-white sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Sección de perfil (foto y datos) */}
        <div className="flex items-center justify-center gap-4 mb-4 md:mb-0">
          <Image
            src="/logo.png"
            alt="logo"
            className=""
            width={120}
            height={120}
          />
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-medium text-gray-100">
              ${`{["think", "design", "develop"]}`}
            </h3>
          </div>
        </div>

        {/* Sección de navegación */}
        <ul className="flex items-center justify-center gap-5">
          <li>
            <Link
              href="#philosophy"
              className="text-lg font-medium hover:text-[#ffffff] transition-colors border-b-2 border-transparent hover:border-[#ffffff] pb-1"
            >
              Philosophy
            </Link>
          </li>
          <li>
            <Link
              href="#work"
              className="text-lg font-medium hover:text-[#ffffff] transition-colors border-b-2 border-transparent hover:border-[#ffffff] pb-1"
            >
              My Work
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-lg font-medium hover:text-[#ffffff] transition-colors border-b-2 border-transparent hover:border-[#ffffff] pb-1"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
