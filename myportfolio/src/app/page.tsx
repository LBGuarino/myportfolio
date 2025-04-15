// pages/index.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Typewriter from "@/components/Typewriter";
import { FaDownload } from "react-icons/fa6";
import ProjectsSection from "@/components/ProjectsSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const loremText = `I'm Lucia Guarino Schlegel, a Full Stack Developer with deep roots in biotechnology and clinical research, driven by a passion to fuse life sciences and technology into meaningful, user-centered solutions. My journey has been marked by a commitment to improving healthcare outcomes through intuitive software and thoughtful design. Beyond my technical background, I am also a musician with a strong artistic sensibility, which deeply 
  informs my approach to user experience and interface design. 
  With experience leading diverse teams in dynamic environments, 
  I specialize in crafting responsive, accessible, and impactful digital products using 
  React, Node.js, Python, between others. I aspire to continue innovating at the intersection of biotechnology, 
  software development, and artistry, creating products that genuinely enhance people's lives.`;

  return (
    <div className="relative">
      {/* Pantalla de carga con AnimatePresence */}
      <AnimatePresence>
        {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Contenedor principal con fade in cuando finaliza la carga */}
      <motion.div
        className="transition-opacity duration-1000"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Sección Home */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-start items-center bg-gray-50 px-4 py-8"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl mt-10 font-bold mb-8">
            {`< About me />`}
          </h1>
          <div className="max-w-xl md:max-w-2xl px-4 text-center font-mono text-lg">
            <Typewriter text={loremText} speed={30} />
          </div>
          <div className="flex flex-row justify-center items-center gap-4 mt-10 text-lg text-blue-600 hover:underline">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              education & experience
            </a>
            <FaDownload />
          </div>
        </section>

        {/* Sección About */}
        <section
          id="philosophy"
          className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl mt-10 font-bold mb-8 px-7 text-center break-words">{"< how do i approach work? />"}</h2>
          <p className="max-w-2xl text-center font-mono text-lg">
          I approach my work as a continuous act of creation, a balance between logic and intuition, 
          precision and spontaneity. To me, each project is a conversation—between technology and humanity, 
          functionality and beauty, science and art. My methodology is deeply rooted in curiosity; I strive to 
          ask meaningful questions and seek connections beyond the obvious. I believe empathy is the core of good 
          design and development, guiding my decisions toward solutions that genuinely resonate with users. 
          By harmonizing structured methodologies with artistic insight, I aim not just to build software, 
          but to craft experiences that make technology feel deeply human.
          </p>
        </section>

        {/* Sección Projects */}
        <section
          id="work"
          className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 py-8"
        >
          <ProjectsSection />
        </section>

        {/* Sección Contact */}
        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-8"
        >
          <ContactForm />
        </section>
      </motion.div>
    </div>
  );
}
