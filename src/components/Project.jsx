import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from '../assets/bulk-image-crop (1)/1303x629/Screenshot (972).png'
import img2 from '../assets/bulk-image-crop (1)/1303x629/Screenshot (971).png'
import img3 from '../assets/bulk-image-crop (1)/1303x629/Screenshot (970).png'
import img4 from '../assets/bulk-image-crop (1)/1303x629/Screenshot (969).png'
import img5 from '../assets/bulk-image-crop (1)/1303x629/Screenshot (968).png'
import img6 from '../assets/bulk-image-crop (1)/1303x629/Screenshot (967).png'
import img7 from '../assets/bulk-image-crop (1)/1303x629/Screenshot (973).png'


gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    Name: "Dogs Ngo Webapp",
    desc: "A platform to add and view street dogs, built with React and Node.js.",
    git: "https://github.com/kedargulve31/frontend",
    live: "https://frontend-pi-topaz-65.vercel.app/",
    tech: ["React", "Node.js", "MongoDB"],
    img:img1
  },
  {
    Name: "To-Do List",
    desc: "A React-based to-do list application to manage tasks efficiently.",
    git: "https://github.com/kedargulve31/todolist",
    live: "https://kedargulve31-todolist.vercel.app/",
    tech: ["React", "CSS", "LocalStorage"],
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWea-Nlh4oaf9DNDQuzMyrnCWex6c-Ix9tWA&s'
  },
  {
    Name: "Event Management Company Website",
    desc: "A modern event management website with interactive GSAP animations.",
    git: "https://github.com/kedargulve31/reactgsap",
    live: "https://reactgsap2-hsdb.vercel.app/",
    tech: ["React", "GSAP", "CSS"],
    img:img2
   
  },
  {
    Name: "Image Carousel",
    desc: "An image carousel project with smooth transition effects.",
    git: "https://github.com/kedargulve31/ImageCarousal",
    live: "https://vercel.com/kedars-projects-3adf5429/image-carousal/FccDbExFNE4q5AU4kpdnrokyUcpw",
    tech: ["React", "CSS", "JavaScript"],
    img:img3
  },
  {
    Name: "Government Welfare Schemes",
    desc: "Displays various welfare schemes with filtering options.",
    git: "https://github.com/kedargulve31/reactschemes",
    live: "https://reactschemes.vercel.app/",
    tech: ["React", "API", "CSS"],
    img:img4
  },
  {
    Name: "Weather App",
    desc: "Find the weather of any city using the OpenWeatherMap API.",
    git: "https://github.com/kedargulve31/WeatherAPI",
    live: "https://weather-api-ebon-five.vercel.app/",
    tech: ["React", "API", "Bootstrap"],
    img:img5
  },
  {
    Name: "Jokes Generator",
    desc: "Generates random jokes using an external API.",
    git: "https://github.com/kedargulve31/jokesgenerator",
    live: "https://jokesgenerator.vercel.app/",
    tech: ["React", "API", "CSS"],
    img:img6
  },
  {
    Name: "Inventory Management Project",
    desc: "Manage and view inventory items efficiently.",
    git: "https://github.com/kedargulve31/inventory-frontend",
    live: "https://inventory-frontend-nine-kappa.vercel.app/",
    tech: ["React", "Node.js", "MongoDB"],
    img:img7
  },
];

const Project = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".project-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-black to-purple-900 py-20 px-4" ref={projectsRef}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <div
      key={index}
      className="project-card group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm"
    >
      {/* Updated part to display project image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={project.img}
          alt={`${project.Name} image`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.Name}
        </h3>
        <p className="text-gray-300 mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          <a
            className="text-white bg-blue-600 rounded-sm px-3 py-1 border-yellow-400 hover:bg-white hover:text-black"
            href={project.git}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-white bg-blue-600 rounded-sm px-3 py-1 border-yellow-400 hover:bg-white hover:text-black"
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </>
  );
};

export default Project;
