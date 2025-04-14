// components/Footer.tsx
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#a16a6a] hover:bg-[#c26868] transition-colors text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Lucia G. Schlegel. All rights reserved.
        </p>
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
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
