import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institute: "Mangalore Institute of Technology & Engineering, Mangalore",
      year: "2024 – 2025",
      score: "CGPA 7.85",
      logo: "/education/mite.png",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institute: "Vijaya College, Mulki",
      year: "2020 – 2023",
      score: "CGPA 7.84",
      logo: "/education/vijaya.png",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-br from-[#020617] via-[#081a3a] to-[#020617]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-cyan-400">Education</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-[2px]
            bg-gradient-to-b from-cyan-400 via-cyan-400/40 to-transparent" />

          <div className="space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row
                  ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                {/* Timeline Icon */}
                <div
                  className="absolute left-0 md:left-1/2 -translate-x-1/2
                  w-12 h-12 bg-cyan-400 text-black rounded-full
                  flex items-center justify-center shadow-lg shadow-cyan-400/50"
                >
                  <FaGraduationCap size={22} />
                </div>

                {/* Card */}
                <div
                  className="mt-14 md:mt-0 md:w-[45%] p-6 rounded-2xl
                  bg-[#020617]/80 border border-cyan-400/20
                  hover:border-cyan-400 transition"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      {/* Logo */}
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <img
                          src={edu.logo}
                          alt={edu.institute}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Degree + Institute */}
                      <div>
                        <h3 className="text-lg font-semibold text-white leading-snug">
                          {edu.degree}
                        </h3>
                        <p className="text-cyan-400 text-sm">
                          {edu.institute}
                        </p>
                      </div>
                    </div>

                    {/* CGPA Badge */}
                    <span
                      className="shrink-0 text-xs font-semibold
                      bg-cyan-400 text-black px-3 py-1 rounded-full"
                    >
                      {edu.score}
                    </span>
                  </div>

                  {/* Year */}
                  <p className="text-sm text-gray-400">
                    {edu.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
