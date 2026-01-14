"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <section className="mx-4 sm:mx-6 md:mx-16 mt-16 md:mt-32 mb-16 md:mb-24 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-card backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 max-w-md sm:max-w-lg w-full text-center shadow-xl border border-white/10"
      >
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Get In Touch
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#9fe0c3] mb-6 sm:mb-8">
          Have a project in mind, collaboration, or just want to say hi?  
          I’m always open to new opportunities and conversations.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6 sm:mb-8 text-2xl sm:text-3xl">
          <a
            href="https://x.com/EbenNwik48707"
            className="hover:text-[#27AE60] transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/EBEN-21"
            target="_blank"
            className="hover:text-[#27AE60] transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.link/fi64sk"
            target="_blank"
            className="hover:text-[#27AE60] transition-colors"
          >
            <IoLogoWhatsapp />
          </a>
        </div>

        {/* Email Button */}
        <a
          href="mailto:ebenezernwikina@gmail.com"
          className="inline-block px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-[#27AE60] hover:bg-[#219150] text-white font-medium transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          Send Me an Email
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
