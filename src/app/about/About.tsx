"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "Javascript", icon: <IoLogoJavascript />, color: "#c1121f" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
  { name: "Express", icon: <SiExpress />, color: "#bc6c25" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
  { name: "Git", icon: <FaGitAlt />, color: "#F1502F" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div className="mx-6 md:mx-16 mt-8 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-12 text-center md:text-left">
        About Me
      </h2>

      {/* Description */}
      <p className="text-base md:text-lg font-normal text-center  max-w-4xl">
        My name is Ebenezer Nwikina. I am a full-stack software engineer with a strong passion for design and problem-solving.
        I enjoy crafting intuitive, interactive web experiences using modern technologies and I am always eager to learn, grow,
        and take on new challenges.
      </p>

      {/* Skills Title */}
      <h3 className="text-xl md:text-2xl font-semibold mt-10 text-white text-center md:text-left">
        My Skills
      </h3>

      {/* Skills Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-6 mt-8 w-full md:w-[70%] justify-items-center"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center cursor-pointer"
          >
            <div
              className="bg-[#212121] rounded-full p-6 text-3xl transition-all duration-300"
              style={{ color: skill.color, boxShadow: `0 0 0px ${skill.color}` }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = `0 0 20px ${skill.color}`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = `0 0 0px ${skill.color}`)
              }
            >
              {skill.icon}
            </div>
            <p className="text-white text-sm mt-2">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
