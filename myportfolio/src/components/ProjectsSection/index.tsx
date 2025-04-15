// components/ProjectsSection.tsx
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import { FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "IMAGO | Clinical Imaging Platform",
    description: "A cloud-based clinical imaging solution designed to enhance breast cancer screening through intuitive web interfaces and robust, compliant data management.",
    pdf: "/imago_web_interface.pdf",
    github: "https://github.com/LBGuarino/imago-web-interface",
    url: "https://imago-project.vercel.app/",
    image: "/imago_project_preview.jpg",
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
    title: "myBiosis | Health Tracking App",
    description: "A personalized mobile app for comprehensive health tracking, emphasizing user-friendly design, accessibility, and secure cloud integration.",
    pdf: "/project3.pdf",
    github: "https://github.com/luciags/IMAGO",
    url: "https://mybiosis-frontend.vercel.app/",
    image: "/mybiosis_project_preview.png",
    tech: ["Dart", "Flutter", "Python", "Firebase", "GCP", "Kubernetes", "AWS"],
  },
  {
    id: 3,
    title: "hi-tec | e-commerce",
    description: "An elegant and fully functional e-commerce platform prioritizing user experience, secure transactions, and responsive design to facilitate seamless online shopping.",
    pdf: "/hi_tec.pdf",
    github: "https://github.com/LBGuarino/ecommerce",
    image: "/hitec_project_preview.png",
    url: "https://thescentedshop.blog/",
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
];

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 py-8"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl mt-10 font-bold mb-4 px-4 text-center break-words">{"< last projects i worked on />"}</h2>
      <p className="max-w-2xl text-center font-mono text-lg">
        These are some of the projects I have worked on recently.
      </p>

      {/* Grid de tarjetas filtradas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow flex flex-col overflow-hidden"
          >
            {/* Preview de imagen */}
            <div className="w-full h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={`Preview of ${project.title}`}
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Contenido de la tarjeta */}
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-center mb-4">
                {project.description}
              </p>
              <div className="flex gap-4 mb-2 mt-1">
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a16a6a] hover:text-[#c26868] transition-colors inline-flex items-center"
                >
                  <span>Capstone</span>
                  <FaDownload className="ml-1" />
                </a>
                <Link href={project.github} className="text-[#a16a6a] hover:text-[#c26868] transition-colors inline-flex items-center">
                  Github
                  <FaGithub className="ml-1" />
                </Link>
                <Link href={project.url} className="text-[#a16a6a] hover:text-[#c26868] transition-colors inline-flex items-center">
                  Link
                  <FaLink className="ml-1" />
                </Link>
              </div>
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
