// components/Typewriter.tsx
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  speed?: number;
}

export default function Typewriter({ text, speed = 50 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  // Referencia al contenedor para medir la altura del texto final
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined);

  // Medir la altura final usando un elemento invisible que ocupa espacio
  useEffect(() => {
    if (containerRef.current) {
      // Usamos scrollHeight para obtener la altura completa del contenido
      setContainerHeight(containerRef.current.scrollHeight);
    }
  }, [text]);

  // Efecto para animar la escritura del texto
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div
      className="relative text-center font-mono text-lg leading-relaxed"
      // Si se midió el alto, lo aplicamos para evitar reflujo
      style={{ height: containerHeight ? `${containerHeight}px` : "auto" }}
      ref={containerRef}
    >
      {/* Elemento invisible que reserva el espacio del texto final */}
      <span className="invisible">{text}</span>
      
      {/* Texto animado posicionado sobre el elemento invisible */}
      <span className="absolute top-0 left-0 w-full">
        {displayedText}
        <motion.span
          className="inline-block"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          |
        </motion.span>
      </span>
    </div>
  );
}
