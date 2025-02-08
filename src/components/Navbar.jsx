import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to scroll smoothly to a section and close the menu
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-10 h-20 flex items-center justify-between px-6">
      {/* Logo */}
      <a href="/" className="flex items-center text-white space-x-2">
        <FaGithub size="2rem" className="text-white" />
        <span className="font-bold text-xl">Kedar Gulve</span>
      </a>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        {isOpen ? (
          <FaTimes size={24} className="text-white cursor-pointer" onClick={() => setIsOpen(false)} />
        ) : (
          <FaBars size={24} className="text-white cursor-pointer" onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-white">
        <li><button onClick={() => scrollToSection("home")} className="hover:text-primary transition duration-200 font-semibold text-xl">About</button></li>
        <li><button onClick={() => scrollToSection("skills")} className="hover:text-primary transition duration-200 font-semibold text-xl">Skills</button></li>
        <li><button onClick={() => scrollToSection("experience")} className="hover:text-primary transition duration-200 font-semibold text-xl">Experience</button></li>
        <li><button onClick={() => scrollToSection("projects")} className="hover:text-primary transition duration-200 font-semibold text-xl">Projects</button></li>
        <li><button onClick={() => scrollToSection("contact")} className="hover:text-primary transition duration-200 font-semibold text-xl">Contact</button></li>
      </ul>

      {/* GitHub Button (Desktop) */}
      <div className="hidden md:block">
        <a href="https://github.com/kedargulve31" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          GitHub Profile
        </a>
      </div>

      {/* Mobile Menu (White Background) */}
      <div className={`fixed inset-0 bg-white text-black transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden`}>
        <div className="flex justify-between items-center p-6 border-b border-gray-300">
          <span className="font-bold text-xl">Menu</span>
          <FaTimes size={24} className="text-black cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>

        <ul className="flex flex-col space-y-6 mt-6 text-center text-lg font-semibold">
          <li><button onClick={() => scrollToSection("home")} className="hover:text-gray-600 transition duration-200">About</button></li>
          <li><button onClick={() => scrollToSection("skills")} className="hover:text-gray-600 transition duration-200">Skills</button></li>
          <li><button onClick={() => scrollToSection("experience")} className="hover:text-gray-600 transition duration-200">Experience</button></li>
          <li><button onClick={() => scrollToSection("projects")} className="hover:text-gray-600 transition duration-200">Projects</button></li>
          <li><button onClick={() => scrollToSection("contact")} className="hover:text-gray-600 transition duration-200">Contact</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

