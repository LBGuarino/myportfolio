// components/ProjectsSection.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";

// Definimos los proyectos con sus datos y tech stack.
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Breve descripción del proyecto uno.",
    pdf: "/project1.pdf",
    image: "/project1-preview.jpg",
    tech: [
      "React",
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "TypeORM",
      "Python",
      "GCP",
      "Firebase",
      "Google Healthcare API",
    ],
  },
  {
    id: 2,
    title: "Project Two",
    description: "Breve descripción del proyecto dos.",
    pdf: "/project2.pdf",
    image: "/project2-preview.jpg",
    tech: [
      "Node.js",
      "Express",
      "React",
      "Next.js",
      "Tailwind",
      "MongoDB",
      "TypeScript",
      "Stripe",
      "Auth0",
      "Vercel",
      "onRender",
    ],
  },
  {
    id: 3,
    title: "Project Three",
    description: "Breve descripción del proyecto tres.",
    pdf: "/project3.pdf",
    image: "/project3-preview.jpg",
    tech: ["Dart", "Flutter", "Firebase", "GCP"],
  },
];

// Generamos un array con todos los tags disponibles (sin duplicados)
const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tech))
);

export default function ProjectsSection() {
  // Inicialmente, ningún tag está seleccionado, por lo que se muestran todos los proyectos.
  const [activeTags, setActiveTags] = useState<string[]>([]);

  // Función para alternar (toggle) la selección de un tag
  const handleToggleTag = (tag: string) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  // Filtramos los proyectos:
  // Si no hay tags activos, se muestran todos los proyectos.
  // Si hay tags activos, se muestran solo aquellos que contengan TODOS esos tags.
  const filteredProjects =
    activeTags.length === 0
      ? projects
      : projects.filter((project) =>
          activeTags.every((tag) => project.tech.includes(tag))
        );

  return (
    <section
      id="work"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 py-8"
    >
      <h2 className="text-3xl font-bold mb-4">last projects i worked on</h2>
      <p className="max-w-2xl text-center text-lg">
        A continuación se muestran algunos de mis proyectos más destacados.
      </p>

      {/* Filtro de tags: se muestran todos los chips con los tags disponibles */}
      <div className="flex flex-wrap justify-center gap-2 mt-4 w-3/4">
        {allTags.map((tag) => {
          const isActive = activeTags.includes(tag);
          return (
            <div
              key={tag}
              onClick={() => handleToggleTag(tag)}
              className={`px-3 py-1 rounded-full cursor-pointer transition-colors border border-transparent ${
                isActive
                  ? "bg-[#a16a6a] text-white hover:bg-[#c26868]"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tag}
            </div>
          );
        })}
      </div>

      {/* Grid de tarjetas filtradas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow flex flex-col overflow-hidden"
          >
            {/* Preview de imagen */}
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
              <Image
                src={project.image}
                alt={`Preview of ${project.title}`}
                width={400}
                height={300}
                className="object-cover"
              />
            </div>
            {/* Contenido de la tarjeta */}
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-center mb-4">
                {project.description}
              </p>
              <a
                href={project.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a16a6a] hover:text-[#c26868] transition-colors inline-flex items-center"
              >
                <span>View Project</span>
                <FaDownload className="ml-2" />
              </a>
              {/* Opcional: mostrar tech stack en la tarjeta */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
