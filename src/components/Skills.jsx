import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaMicrosoft,
  FaCode, // VS Code icon
} from "react-icons/fa";
import {
  SiMysql,
  SiCanva,
  SiAdobephotoshop,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "from-orange-500 to-red-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", icon: FaJs, color: "from-yellow-400 to-orange-400" },
  { name: "Bootstrap", icon: FaBootstrap, color: "from-purple-500 to-pink-500" },
  { name: "MySQL", icon: SiMysql, color: "from-sky-400 to-blue-500" },
  { name: "Git", icon: FaGitAlt, color: "from-red-500 to-orange-500" },
  { name: "GitHub", icon: FaGithub, color: "from-gray-400 to-gray-600" },
  { name: "VS Code", icon: FaCode, color: "from-cyan-400 to-blue-500" },
  { name: "Figma", icon: FaFigma, color: "from-pink-500 to-purple-500" },
  { name: "Canva", icon: SiCanva, color: "from-cyan-400 to-teal-500" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "from-blue-500 to-indigo-500" },
  { name: "MS Excel", icon: FaMicrosoft, color: "from-green-500 to-emerald-500" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section bg-gradient-to-b from-bgMain via-bgSoft to-bgMain"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My <span className="text-accent">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-center max-w-3xl mx-auto mb-16"
        >
          Tools and technologies I use to build modern, responsive,
          and high-quality web applications.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group rounded-2xl p-[2px] bg-gradient-to-r"
                style={{
                  backgroundImage: `linear-gradient(to right, ${skill.color})`,
                }}
              >
                <div className="bg-bgMain rounded-2xl p-6 flex flex-col items-center justify-center h-full transition group-hover:bg-bgSoft">
                  <Icon className="text-5xl text-white mb-4" />
                  <p className="text-white text-sm font-semibold text-center">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
