import React, { useEffect, useRef } from "react";
import { skills } from "../data/constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef([]);

  useEffect(() => {
    // Animate the section heading
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Stagger animation for skill cards
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <div
      id="skills"
      ref={sectionRef}
      className="flex flex-col items-center justify-center relative z-10 mb-5"
    >
      <div className="flex flex-col justify-between items-center relative w-full max-w-4xl gap-12 sm:flex-col">
        {/* Section Title */}
        <div className="text-4xl md:text-5xl font-bold text-white mt-5 text-center sm:text-3xl sm:mt-3">
          Skills
        </div>
        <div className="text-lg text-center max-w-lg text-gray-200 sm:text-base">
          Here are some of my skills on which I have been working on for the past 2 years.
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-8 justify-center mt-8 w-full">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              ref={(el) => (cardRef.current[index] = el)}
              className="flex flex-col items-center justify-start max-w-md w-full bg-[#101725] p-6 rounded-lg border border-purple-600 shadow-lg sm:max-w-sm transition-transform transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-gray-600 mb-5 text-center">
                {skill.title}
              </h2>
              <div className="flex flex-wrap gap-3 justify-center mb-5">
                {skill.skills.map((item) => (
                  <div
                    key={item.name}
                    className="text-sm text-white-700 font-medium border border-gray-400 rounded-lg py-3 px-4 flex items-center justify-center gap-2 sm:text-xs"
                  >
                    <img src={item.image} alt={item.name} className="w-6 h-6" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

