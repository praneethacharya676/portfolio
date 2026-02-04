import { motion } from "framer-motion";

export default function About() {
  return (
    
    <section
  id="about"
  className="section bg-gradient-to-b from-bgMain via-bgSoft to-bgMain"
>

      
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        {/* Subheading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-semibold text-purple-400 mb-6"
        >
          Frontend / UI/UX Developer / Web Developer
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-300 leading-relaxed text-lg mb-8"
        >
          I am an MCA graduate and passionate web developer with strong experience
          in building modern, responsive, and user-friendly web applications.
          <br /><br />
          I specialize in <span className="text-cyan-400 font-semibold">React</span>,
          <span className="text-cyan-400 font-semibold"> Tailwind CSS</span>, and
          clean UI/UX design. I focus on performance, accessibility, and
          writing maintainable code to deliver high-quality digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="bg-cyan-400 text-black px-8 py-3 rounded-full font-semibold shadow-lg shadow-cyan-400/40 hover:scale-105 transition"
          >
            View Projects
          </a>

        </motion.div>
        

      </div>
    </section>
  );
}
