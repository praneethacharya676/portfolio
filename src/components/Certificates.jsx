import { motion } from "framer-motion";

export default function Certificates() {
  const certificates = [
    {
      title: "React Development Certificate",
      org: "Online Learning Platform",
      year: "2024",
    },
    {
      title: "Web Development Fundamentals",
      org: "Coursera / Udemy",
      year: "2023",
    },
  ];

  return (
    <section id="certificates" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Certificates</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition"
          >
            <h3 className="text-xl font-semibold text-blue-400">
              {cert.title}
            </h3>
            <p className="text-gray-400 mt-2">{cert.org}</p>
            <p className="text-sm text-gray-500 mt-1">{cert.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
