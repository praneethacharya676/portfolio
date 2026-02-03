import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Web Developer", "React Developer", "Frontend Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-[#050b1a] via-[#07142c] to-[#020617]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-400 mb-2">Hello, It&apos;s Me</p>

          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Praneeth <span className="text-cyan-400">Acharya</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            And I&apos;m a{" "}
            <span className="text-cyan-400">
              {text}
              <Cursor cursorStyle="|" />
            </span>
          </h2>

          <p className="text-gray-400 max-w-md mb-6">
            I’m an MCA graduate and frontend developer with strong knowledge of
            React, Tailwind CSS, and responsive UI design.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">
              <FaGithub />
            </a>
          </div>

         <div className="flex flex-wrap gap-4">
        <a href="/resume.pdf"
            download
            className="inline-block bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg shadow-cyan-400/40 hover:scale-105 transition">
            Download Resume
        </a>
        </div>

        </motion.div>

        {/* RIGHT IMAGE */}
       <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],   // floating up & down
        }}
        transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        }}
        className="flex justify-center"
        >

          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 blur-2xl opacity-70"></div>

            {/* Image */}
            <img
              src={profile}
              alt="Profile"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-cyan-400"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
