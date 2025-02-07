import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // For hamburger menu
import { FaGithub } from 'react-icons/fa'; // FontAwesome icon for GitHub

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 sticky top-0 z-10 h-20 flex items-center justify-between px-6">
      {/* Logo Section */}
      <Link to="/" className="flex items-center text-white space-x-2">
        <FaGithub size="2rem" className="text-white" />
        <span className="font-bold text-xl">Kedar Gulve</span>
      </Link>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <FaBars size={24} className="text-white" onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* Desktop Menu Items */}
      <ul className="hidden md:flex space-x-8 text-white">
        <li><Link href="/home" className="hover:text-primary transition duration-200 font-semibold text-xl">About</Link></li>
        <li><Link to="/skills" className="hover:text-primary transition duration-200 font-semibold text-xl">Skills</Link></li>
        <li><Link  to="/exper"className="hover:text-primary transition duration-200 font-semibold text-xl">Experience</Link></li>
        <li><Link  to="/projects" className="hover:text-primary transition duration-200 font-semibold text-xl">Projects</Link></li>
        {/* <li><Link  href="#education" className="hover:text-primary transition duration-200 font-semibold text-xl">Education</Link></li> */}
      </ul>

      {/* GitHub Button for Desktop */}
      <div className="hidden md:block">
        <a
          href="https://github.com/yourusername" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        >
          GitHub Profile
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 right-0 w-full bg-gray-800 text-white p-6 shadow-lg">
          <ul className="flex flex-col space-y-6">
            <li><Link href="/home" className="hover:text-gray-400 transition duration-200" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><a href="#skills" className="hover:text-gray-400 transition duration-200" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#experience" className="hover:text-gray-400 transition duration-200" onClick={() => setIsOpen(false)}>Experience</a></li>
            <li><a href="#projects" className="hover:text-gray-400 transition duration-200" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#education" className="hover:text-gray-400 transition duration-200" onClick={() => setIsOpen(false)}>Education</a></li>
            <li>
              <a
                href="https://github.com/yourusername" // Replace with your GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                GitHub Profile
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
