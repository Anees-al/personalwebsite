import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="text-white bg-[#1E1E1E] shadow shadow-[#181818] rounded-md mt-10 py-16 px-4 md:px-10 lg:px-[150px] text-sm">
      
      {/* Logo / Name */}
      <div>
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 mb-6">
          Anees A L<span className="text-4xl ml-1">.</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12 p-3">
        
        <div className="space-y-2">
          <a href="#home" className="hover:text-orange-700 block">Home</a>
          <a href="#about" className="hover:text-orange-700 block">About</a>
          <a href="#contact" className="hover:text-orange-700 block">Contact</a>
          <a href="#experience" className="hover:text-orange-700 block">Experience</a>
        </div>

        <div className="space-y-2">
          <a href="#project1" className="hover:text-orange-700 block">Project1</a>
          <a href="#project2" className="hover:text-orange-700 block">Project2</a>
          <a href="#project3" className="hover:text-orange-700 block">Project3</a>
          <a href="#project4" className="hover:text-orange-700 block">Project4</a>
        </div>

        <div className="space-y-2">
          <a href="/resume.pdf" className="hover:text-orange-700 block" download>Resume</a>
          <a href="#skills" className="hover:text-orange-700 block">Skills</a>
          <a href="#message" className="hover:text-orange-700 block">Message</a>
          <a href="tel:+917025249503" className="hover:text-orange-700 block">Phone</a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-10 mb-4">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin color="#0077B5" size={28} className="cursor-pointer hover:scale-110 transition" />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub color="white" size={28} className="cursor-pointer hover:scale-110 transition" />
        </a>
        <a href="https://wa.me/917025249503" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp color="#25D366" size={28} className="cursor-pointer hover:scale-110 transition" />
        </a>
        <a href="mailto:aneesansariii123@gmail.com" aria-label="Email">
          <SiGmail color="#D93025" size={28} className="cursor-pointer hover:scale-110 transition" />
        </a>
      </div>

      <hr className="border-gray-700" />
      <p className="text-center mt-2 text-xs">© 2025 Anees A L. All rights reserved.</p>
    </div>
  );
};

export default Footer;
