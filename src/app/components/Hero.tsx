"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profilePic from "../../../public/profile.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between mx-6 md:mx-16 mt-12 md:mt-16 gap-10 md:gap-0">

      {/* Name and Info */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Hi, I am
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-300 animate-gradient">
            Ebenezer Nwikina
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-base sm:text-lg pb-4 text-muted"
        >
          Frontend Web Developer
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center md:justify-start gap-4"
        >
          <li>
            <a
              href="/Ebenezer Nwikina CV.docx"
              download
              className="inline-block px-6 py-3 rounded-lg bg-[#27AE60] hover:bg-[#219150] text-white font-medium transition-all shadow-lg hover:shadow-xl"
            >
              Download CV
            </a>
          </li>
        </motion.ul>
      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-56 h-56 md:w-80 md:h-80 flex-shrink-0 mx-auto md:mx-0"
      >
        <Image
          src={profilePic}
          alt="Profile Picture"
          width={320}
          height={320}
          className="rounded-full object-cover w-full h-full"
        />
      </motion.div>

    </div>
  );
};

export default Hero;
