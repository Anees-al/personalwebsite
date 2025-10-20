import React from "react";
import ecommerce from "../assets/ecommerce.jpg";
import {motion} from 'framer-motion'

const projects = [
  {
    title: "Fashion Ecommerce",
    description:
      "Built a fully responsive online store using React, Node.js, Express, and MongoDB. Features include user authentication, product search/filter, cart, checkout, and admin dashboard. Integrated Stripe for secure payments.",
    image: ecommerce,
    github: "https://github.com/your-repo", // replace with real URL
  },
  {
    title: "Fashion Ecommerce",
    description:
      "Built a fully responsive online store using React, Node.js, Express, and MongoDB. Features include user authentication, product search/filter, cart, checkout, and admin dashboard. Integrated Stripe for secure payments.",
    image: ecommerce,
    github: "https://github.com/your-repo",
  },
  {
    title: "Fashion Ecommerce",
    description:
      "Built a fully responsive online store using React, Node.js, Express, and MongoDB. Features include user authentication, product search/filter, cart, checkout, and admin dashboard. Integrated Stripe for secure payments.",
    image: ecommerce,
    github: "https://github.com/your-repo",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col bg-[#1E1E1E] text-white shadow shadow-[#181818] rounded-md mt-10 py-10 px-4 md:px-10 lg:px-20">
      <motion.h1 className="text-center text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 mb-10" initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}}>
        My Projects
      </motion.h1>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial={{x:-200,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#2A2A2A] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-[200px] object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400">
                {project.title}
              </h2>
              <p className="text-sm mt-4 font-medium">{project.description}</p>
              <div className="flex justify-center mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-orange-800 to-yellow-600 rounded-lg text-sm font-semibold hover:scale-105 transition-transform"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
