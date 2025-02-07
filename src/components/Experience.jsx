import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { experiences } from "../data/constants";

gsap.registerPlugin(_ScrollTrigger);

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card w-full md:w-[300px] lg:w-[450px] rounded-lg shadow-md bg-gray-800 border border-blue-600 p-4 flex flex-col gap-4 relative overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Top Section (Image and Role) */}
      <div className="flex items-center gap-4">
        <img
          src={experience.img}
          alt={experience.role}
          className="w-15 h-12 rounded-lg object-cover"
        />
        <div className="flex flex-col">
          <div className="text-lg font-semibold text-white">{experience.role}</div>
          <div className="text-sm font-medium text-blue-300">{experience.company}</div>
          <div className="text-xs text-gray-400">{experience.date}</div>
        </div>
      </div>

      {/* Description */}
      <div className="text-sm text-gray-300 mt-2">
        {experience?.desc && <p className="line-clamp-4">{experience.desc}</p>}

        {/* Skills */}
        {experience?.skills && (
          <div className="mt-4">
            <div className="font-bold text-white">Skills:</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {experience.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-700 text-white text-xs px-2 py-1 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Document Link */}
      {experience.doc && (
        <a
          href={experience.doc}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 mt-4 underline text-sm hover:text-blue-200"
        >
          View Document
        </a>
      )}
    </div>
  );
};

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".experience-card").forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=10",
            toggleActions: "play none none reverse",
          },
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, experienceRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      className="flex flex-col items-center py-16 bg-gray-900 text-white"
      ref={experienceRef}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">Experience</h2>
        <p className="text-lg text-gray-300 mb-12">
          My professional journey and experiences as a software engineer.
        </p>

        {/* Timeline */}
        <div className="w-full flex flex-wrap justify-center gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
