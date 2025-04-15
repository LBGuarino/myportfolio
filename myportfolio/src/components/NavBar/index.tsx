// components/NavBar.tsx
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-[#a16a6a] hover:bg-[#c26868] transition-colors text-white sticky top-0 z-50">
      <div className="container mx-auto py-3 px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={80}
            height={80}
          />
          <h3 className="text-md md:text-lg font-medium">
            ${`{["think", "design", "develop"]}`}
          </h3>
        </div>

        <ul className="flex gap-4">
          <li>
            <Link
              href="#philosophy"
              className="text-sm md:text-lg font-medium border-b-2 border-transparent hover:border-white transition-colors pb-1"
            >
              Philosophy
            </Link>
          </li>
          <li>
            <Link
              href="#work"
              className="text-sm md:text-lg font-medium border-b-2 border-transparent hover:border-white transition-colors pb-1"
            >
              My Work
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-sm md:text-lg font-medium border-b-2 border-transparent hover:border-white transition-colors pb-1"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
