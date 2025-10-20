import React from "react";
import aboutimg from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center md:items-start justify-between p-4 md:px-[150px] mt-10 py-16 bg-[#1E1E1E] text-white shadow shadow-[#181818] rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Image */}
      <motion.div
        className="w-full md:min-w-[400px] flex justify-center"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <img
          src={aboutimg}
          alt="About"
          className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-lg object-cover"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        className="mt-10 md:mt-0 md:ml-10 text-center md:text-left"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 mb-8">
          About Me
        </p>

        <p className="font-medium leading-relaxed text-sm md:text-lg">
          I’m a self-taught MERN stack developer with a deep passion for building
          modern, scalable web applications. My journey into coding started with
          curiosity and quickly turned into an obsession — from writing my first
          "Hello World" to deploying full-stack projects in the wild. I specialize
          in the MERN stack (MongoDB, Express.js, React, Node.js), and love turning
          ideas into clean, functional, and user-friendly applications. Whether it’s
          creating a responsive UI, designing RESTful APIs, or optimizing backend
          performance, I enjoy every step of the development process.
        </p>

        <div className="flex justify-center md:justify-start mt-8">
          <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 shadow rounded-lg font-semibold text-lg hover:scale-105 transition">
            Resume
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
