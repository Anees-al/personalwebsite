'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaGithub, FaLinkedin, FaTimes, FaWhatsapp } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full">
      <motion.nav
        className="flex items-center justify-between flex-wrap p-4 bg-[#1E1E1E] text-white shadow-md rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Anees A L<span className="text-4xl ml-1">.</span>
        </motion.h1>

        {/* Hamburger (mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
          </button>
        </div>

        {/* Navigation Links (desktop) */}
        <motion.div
          className="hidden md:flex gap-6 font-semibold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="cursor-pointer hover:text-orange-500">Home</p>
          <p className="cursor-pointer hover:text-orange-500">About</p>
          <p className="cursor-pointer hover:text-orange-500">Contact</p>
          <p className="cursor-pointer hover:text-orange-500">Projects</p>
        </motion.div>

        {/* Social Icons (desktop only) */}
        <div className="hidden md:flex gap-4 items-center">
          <FaLinkedin color="#0077B5" size={24} className="cursor-pointer" />
          <FaGithub color="white" size={24} className="cursor-pointer" />
          <FaWhatsapp color="#25D366" size={24} className="cursor-pointer" />
          <SiGmail color="#D93025" size={24} className="cursor-pointer" />
        </div>
      </motion.nav>

      {/* Mobile Menu (visible when hamburger is open) */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-[#1E1E1E] p-4 rounded-md text-white space-y-4 text-center">
          <p className="cursor-pointer hover:text-orange-500">Home</p>
          <p className="cursor-pointer hover:text-orange-500">About</p>
          <p className="cursor-pointer hover:text-orange-500">Contact</p>
          <p className="cursor-pointer hover:text-orange-500">Projects</p>
          <div className="flex justify-center gap-4 mt-4">
            <FaLinkedin color="#0077B5" size={24} />
            <FaGithub color="white" size={24} />
            <FaWhatsapp color="#25D366" size={24} />
            <SiGmail color="#D93025" size={24} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
