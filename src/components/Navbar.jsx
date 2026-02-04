import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
      <div className="flex items-center justify-between px-6 py-4 rounded-2xl
        bg-gradient-to-r from-[#020617] via-[#081a3a] to-[#020617]
        border border-cyan-400/20 backdrop-blur-md">

        {/* Logo */}
        <h1 className="text-xl font-bold text-cyan-400">Praneeth</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white hover:text-cyan-400 transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-2 md:hidden rounded-2xl
              bg-gradient-to-b from-[#020617] to-[#081a3a]
              border border-cyan-400/20"
          >
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-white hover:text-cyan-400"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
