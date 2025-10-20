import React from "react";
import { DiGit, DiMongodb } from "react-icons/di";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import {motion} from 'framer-motion'
const Technologies = () => {
  return (
    <motion.div className="flex flex-col p-4 md:px-10 lg:px-20 text-white bg-[#1E1E1E] shadow shadow-[#181818] rounded-md mt-10 py-16" initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <motion.p className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 text-center mb-10" initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} >
        My Tech Stack
      </motion.p>

      <motion.div className="flex flex-wrap justify-center gap-6 md:gap-10" initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}}>
        <FaHtml5 size={40} color="#E34F26" title="HTML5" />
        <FaCss3 size={40} color="#1572B6" title="CSS3" />
        <FaJs size={40} color="#F7DF1E" title="JavaScript" />
        <FaReact size={40} color="#61DAFB" title="React" />
        <FaNodeJs size={40} color="#339933" title="Node.js" />
        <SiExpress size={40} color="#404040" title="Express.js" />
        <DiMongodb size={40} color="#47A248" title="MongoDB" />
        <TbBrandFramerMotion size={40} color="#0055FF" title="Framer Motion" />
        <SiTailwindcss size={40} color="#06B6D4" title="Tailwind CSS" />
        <FaC size={40} color="#A8B9CC" title="C Programming" />
        <DiGit size={40} color="#F05033" title="Git" />
      </motion.div>
    </motion.div>
  );
};

export default Technologies;
