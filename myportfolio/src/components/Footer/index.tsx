// components/Footer.tsx
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#a16a6a] hover:bg-[#c26868] text-white py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left text-sm">
        <p>
          © {new Date().getFullYear()} Lucia G. Schlegel. All rights reserved.
        </p>
        <p className="mt-1">
          Portfolio built using Next.js.
        </p>
        </div>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/lucia-guarino-schlegel-1300ba189/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-300 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/LBGuarino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-300 transition-colors"
          >
            <FaGithub />
          </a>
          <Link
            href="/contact"
            className="text-2xl hover:text-gray-300 transition-colors"
          >
            <FaEnvelope />
          </Link>
        </div>
      </div>
    </footer>
  );
}
