import { motion } from "framer-motion";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built using React and Tailwind CSS.",
      image: project1,
      tech: ["React", "Tailwind"],
      github: "https://github.com/",
      live: "https://example.com",
    },
    {
      title: "Todo App",
      desc: "Task management app with clean UI and local storage.",
      image: project2,
      tech: ["JavaScript", "CSS"],
      github: "https://github.com/",
      live: "https://example.com",
    },
    {
      title: "Landing Page",
      desc: "Modern responsive landing page design.",
      image: project3,
      tech: ["HTML", "CSS"],
      github: "https://github.com/",
      live: "https://example.com",
    },
  ];

  return (
    <section
  id="projects"
  className="section bg-gradient-to-b from-bgMain via-bgSoft to-bgMain"
>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#020617] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-400/20 transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.desc}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-cyan-400/10 text-cyan-400 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
