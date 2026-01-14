"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const MenuLinks = [
  { id: 1, name: "About", link: "#about" },
  { id: 2, name: "Projects", link: "#projects" },
  { id: 3, name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 md:px-16 py-5 text-white z-50 ">
      
      {/* Logo */}
      <h1 className="text-3xl font-bold text-white">EBEN</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8">
        {MenuLinks.map((item) => (
          <li key={item.id} className="text-sm font-medium hover:text-[#27AE60] transition-colors duration-300">
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-full bg-black opacity-95 z-50 flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <HiX size={32} />
            </button>

            {/* Menu Links */}
            {MenuLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold text-white hover:text-[#27AE60] transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
