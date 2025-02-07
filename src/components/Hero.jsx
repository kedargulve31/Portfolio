import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import Type from './Type';

const Hero = () => {
  const textRef = useRef(null);
  const starsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // initial animation
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });

      // Star animation
      const stars = starsRef.current?.children;
      if (stars) {
        gsap.to(stars, {
          duration: 4,
          repeat: -1,
          y: "random(-50, 50)",
          x: "random(-50, 50)",
          ease: "sine.inOut",
          stagger: {
            amount: 0.1,
            from: "random",
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* All BG Shapes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
          <div className="hero-shape absolute top-20 left-10 w-40 h-40 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
          <div className="hero-shape absolute top-40 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
          <div className="hero-shape absolute bottom-20 left-1/2 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
        </div>

        {/* Stars Section */}
        <div
          ref={starsRef}
          className="absolute inset-0 z-0 flex justify-center items-center"
        >
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className="w-1 h-1 bg-white rounded-full absolute"
              style={{
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                opacity: Math.random(),
              }}
            ></div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 px-4">
          {/* Left Text Section */}
          <div ref={textRef} className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Kedar Gulve
              </span>
             
            </h1>
            <strong style={{color:"red", fontSize:'28px'}}><Type/></strong>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              Full Stack Developer crafting beautiful digital experiences with
              modern technologies
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start items-center gap-6 mb-12">
              <a
                className="text-gray-400 hover:text-white transition-colors"
                href="https://github.com/kedargulve31"
              >
                <Github size={24} />
              </a>
              <a
                className="text-gray-400 hover:text-white transition-colors"
                href="https://in.linkedin.com/in/kedar-gulve-519707203"
              >
                <Linkedin size={24} />
              </a>
              <a
                className="text-gray-400 hover:text-white transition-colors"
                href="mailto:kedargulve31@gmail.com"
              >
                <Mail size={24} />
              </a>
            </div>
            {/* Call to Action Button */}
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1WOl4JalhweeCz9Z6US_-OgvDVnhhK5Uy/view",
                  "_blank"
                )
              }
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              VIEW MY CV
            </button>
          </div>

          {/* Right Image Section */}
          <div className="max-w-xs md:max-w-md lg:max-w-lg">
          <img
         src={pic3}
         alt="Kedar Gulve"
         className="w-`100` h-[80]  bg-yellow-400 rounded-full border-2 border-purple-700"
          />
         </div>

        </div>
      </div>
    </>
  );
};

export default Hero;
