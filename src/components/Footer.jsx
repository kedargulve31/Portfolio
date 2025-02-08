import { Facebook, Instagram } from 'lucide-react';
import { Bio } from '../data/constants';

function Footer() {
  return (
    <div className="w-full py-8 flex justify-center bg-gray-900">
      <footer className="w-full max-w-5xl flex flex-col gap-6 items-center p-4 text-primary">
        {/* Title */}
        <h1 className="font-semibold text-2xl sm:text-xl text-primary">
          Kedar Gulve
        </h1>

        {/* Navigation Links */}
        <nav className="w-full max-w-3xl flex flex-wrap gap-6 justify-center sm:gap-4 sm:text-sm">
          <a
            href="#about"
            className="text-white text-base hover:text-primary transition duration-200 ease-in-out"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-white text-base hover:text-primary transition duration-200 ease-in-out"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-white text-base hover:text-primary transition duration-200 ease-in-out"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-white text-base hover:text-primary transition duration-200 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#education"
            className="text-white text-base hover:text-primary transition duration-200 ease-in-out"
          >
            Education
          </a>
        </nav>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <a
            href={Bio.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition duration-200 ease-in-out"
          >
            <Facebook size={24} />
          </a>
          <a
            href={Bio.insta}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition duration-200 ease-in-out"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=8788204779&text=Hello"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition duration-200 ease-in-out"
          >
            <i className="fa-brands fa-whatsapp fa-xl"></i>
          </a>
          <a
            href="https://in.linkedin.com/in/kedar-gulve-519707203"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition duration-200 ease-in-out"
          >
            <i className="fa-brands fa-linkedin fa-xl"></i>
          </a>
        </div>

        {/* Footer Text */}
        <p className="mt-6 text-sm text-white text-center">
          &copy; 2025 Kedar Gulve. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;

