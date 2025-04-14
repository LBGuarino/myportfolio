// pages/index.tsx
'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const loremText = `I'm Lucia Guarino Schlegel, a Full Stack Developer with deep roots in biotechnology and clinical research, driven by a passion to fuse life sciences and technology into meaningful, user-centered solutions. My journey has been marked by a commitment to improving healthcare outcomes through intuitive software and thoughtful design. Beyond my technical background, I am also a musician with a strong artistic sensibility, which deeply 
  informs my approach to user experience and interface design. 
  With experience leading diverse teams in dynamic environments, 
  I specialize in crafting responsive, accessible, and impactful digital products using 
  React, Node.js, and Python. I aspire to continue innovating at the intersection of biotechnology, 
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
        <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 py-8">
          <h1 className="text-center text-3xl font-bold mb-4">My Portfolio</h1>
          <div className="w-full md:w-1/2 min-h-[200px]">
            <Typewriter text={loremText} speed={30} />
          </div>
        </section>

        {/* Sección About */}
        <section id="philosophy" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
          <p className="max-w-2xl text-center text-lg">
            Aquí va una breve descripción sobre ti, tu experiencia y lo que te apasiona.
          </p>
        </section>

        {/* Sección Projects */}
        <section id="work" className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
          <p className="max-w-2xl text-center text-lg">
            A continuación se muestran algunos de mis proyectos más destacados.
          </p>
          {/* Aquí podrías renderizar una grid o slider con tus proyectos */}
        </section>

        {/* Sección Contact */}
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">Contacto</h2>
          <p className="max-w-2xl text-center text-lg">
            Puedes comunicarte conmigo mediante las redes sociales o enviarme un mensaje directo.
          </p>
          {/* También podrías incluir un formulario de contacto */}
        </section>
      </motion.div>
    </div>
  );
}
