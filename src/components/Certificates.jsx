import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "../data/certificates";

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section
      id="certificates"
      className="py-24 bg-gradient-to-br from-[#020617] via-[#081a3a] to-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My <span className="text-cyan-400">Certificates</span>
        </motion.h2>

        {/* Certificate Cards (Project Style) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => setActiveCert(cert)}
              className="group cursor-pointer rounded-2xl overflow-hidden
              border border-cyan-400/20 bg-[#020617]/80 hover:border-cyan-400"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover
                  group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0
                group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-cyan-400 font-semibold">
                    View Certificate
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULL SCREEN IMAGE POPUP */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-6 right-6 text-white text-3xl hover:text-cyan-400"
            >
              ✕
            </button>

            {/* Certificate Image */}
            <motion.img
              src={activeCert.image}
              alt={activeCert.title}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-[95%] max-h-[90vh] rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
