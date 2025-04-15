"use client";
import React, { useEffect, useState } from "react";

// Palabras que irán rotando en el cartel
const WORDS = ["an artist", "a developer", "a thinker"];

// Alfabeto que usaremos para generar caracteres aleatorios
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function getRandomChar() {
  return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
}

export default function AirportBanner() {
  const [displayedText, setDisplayedText] = useState(WORDS[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Cambia la palabra cada 3 segundos
    const timer = setInterval(() => {
      const nextIndex = (index + 1) % WORDS.length;
      flipTo(WORDS[nextIndex]);
      setIndex(nextIndex);
    }, 3000);

    return () => clearInterval(timer);
  }, [index]);

  // Función que hace el efecto "split-flap": 
  // durante unos frames usamos caracteres aleatorios y luego fijamos la palabra final
  function flipTo(targetWord: string) {
    const currentChars = displayedText.split("");
    const targetChars = targetWord.split("");
    const maxLength = Math.max(currentChars.length, targetChars.length);
    let frames = 0;

    const flipInterval = setInterval(() => {
      frames++;
      const updated = [...currentChars];

      // Recorre cada letra y asigna una aleatoria si aún no coincide con la final
      for (let i = 0; i < maxLength; i++) {
        if (updated[i] !== targetChars[i]) {
          updated[i] = getRandomChar();
        }
      }

      setDisplayedText(updated.join(""));

      // Una vez pasados unos frames, fijamos la palabra final
      if (frames > 6) {
        clearInterval(flipInterval);
        setDisplayedText(targetWord);
      }
    }, 70);
  }

  return (
    <div className="w-full bg-gray-200 py-2 flex items-center justify-center">
      <h2 className="text-lg sm:text-xl md:text-2xl font-mono font-bold">
        I am {displayedText}
      </h2>
    </div>
  );
}
