"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "RentCars Web App",
    description: "A web platform that allows users to rent vehicles in an area.",
    tech: ["React", "Tailwind", "Framer motion"],
    image: "/rentcars.png",
  },
  {
    title: "AlertNet",
    description:
      "An educational web app that teaches users about Nigerian dishes, ingredients, and cooking methods.",
    tech: ["React", "Leaflet", "Tailwind", "Node.js"],
    image: "/alert.png",
  },
  {
    title: "Learny",
    description:
      "My modern developer portfolio built with Next.js, Tailwind, and Framer Motion.",
    tech: ["Next.js", "Tailwind"],
    image: "/Learny.png",
  },
];

const Projects = () => {
  return (
    <section className="mx-4 sm:mx-6 md:mx-16 mt-24">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
        Projects
      </h2>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -6 }}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/5 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-sm sm:text-base text-[#9fe0c3] mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-xs sm:text-sm px-3 py-1 rounded-full bg-[#013220] text-[#9fe0c3]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
