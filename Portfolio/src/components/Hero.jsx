import React from "react";
import profile from "../assets/myprofile.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center md:items-start justify-between p-4 md:px-[150px] mt-10 py-16 bg-[#1E1E1E] text-white shadow shadow-[#181818] rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Section - Text */}
      <motion.div
        className="w-full md:w-[450px] text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p className="text-2xl md:text-3xl font-semibold">
          I am a{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400">
            MERN stack developer
          </span>
        </p>
        <p className="text-sm md:text-md font-semibold px-2 mt-4">
          Building dynamic, scalable web apps using MongoDB, Express, React, and
          Node.js. I turn complex ideas into clean, fast, and responsive digital
          experiences. Let’s bring your vision to life — from backend logic to
          pixel-perfect frontend.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 shadow rounded-lg font-semibold text-lg hover:scale-105 transition">
            My Projects
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 shadow rounded-lg font-semibold text-lg hover:scale-105 transition">
            Contact
          </button>
        </div>
      </motion.div>

      {/* Right Section - Profile Image */}
      <motion.div
        className="mt-10 md:mt-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <img
          src={profile}
          className="h-[250px] w-[250px] md:h-[300px] md:w-[300px] rounded-full border border-black"
          alt="Profile"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
