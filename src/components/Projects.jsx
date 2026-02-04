import { motion } from "framer-motion";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Online Real Estate Business",
      year: "2023",
      image: project1,
      desc: [
        "Developed a responsive web application to manage property listings, rentals, and sales",
        "Designed forms for property posting and customer inquiries",
        "Improved navigation and layout for better user experience",
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      // github: "https://github.com/",
      // live: "https://example.com",
    },
    {
      title: "Arduino-Based Dual Axis Solar Tracker",
      year: "2024",
      image: project2,
      desc: [
        "Built an IoT-based system to track solar panel movement using LDR sensors and servo motors",
        "Programmed Arduino to adjust panel position based on sunlight direction",
        "Integrated smoke detection module for safety alerts",
      ],
      tech: ["Arduino", "IoT", "Embedded C"],
      // github: "https://github.com/",
      // live: "",
    },
  ];

  return (
    <section
      id="projects"
      className="section bg-gradient-to-b from-bgMain via-bgSoft to-bgMain"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="section-title mb-12">
          My <span className="section-accent">Projects</span>
        </h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
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
                {/* Title + Year */}
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm text-cyan-400">
                    {project.year}
                  </span>
                </div>

                {/* Description */}
                <ul className="list-disc list-inside text-textSoft text-sm space-y-1 mb-4">
                  {project.desc.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Tech Stack */}
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

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition"
                    >
                      <FaGithub /> Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
