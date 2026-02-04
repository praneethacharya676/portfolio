import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["UI/UX Developer", "Frontend Developer", "Web Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20
      bg-gradient-to-br from-[#020617] via-[#081a3a] to-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-6
        flex flex-col-reverse md:grid md:grid-cols-2
        gap-14 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-gray-400 mb-2">Hello, It's Me</p>

          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Praneeth <span className="text-cyan-400">Acharya</span>
          </h1>

          <h2 className="text-xl md:text-2xl mb-4">
            And I'm a{" "}
            <span className="text-cyan-400 font-semibold">
              {text}
            </span>
            <Cursor />
          </h2>

          <p className="text-gray-300 max-w-md mx-auto md:mx-0 mb-6">
            I'm an MCA graduate and frontend developer with strong
            knowledge of React, Tailwind CSS, and responsive UI design.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="social-icon"
                >
                  <Icon />
                </a>
              )
            )}
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-block bg-cyan-400 text-black px-8 py-3
            rounded-full font-semibold shadow-lg shadow-cyan-400/40
            hover:scale-105 transition"
          >
            Download Resume
          </a>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full
              bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500
              blur-2xl opacity-70" />
            <img
              src={profile}
              alt="profile"
              className="relative w-64 h-64 md:w-80 md:h-80
              rounded-full object-cover border-4 border-cyan-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
