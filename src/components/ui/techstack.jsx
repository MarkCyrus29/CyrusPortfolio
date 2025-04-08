import React from "react";
import Marquee from "react-fast-marquee";
const techStack = [
  {
    name: "HTML5",
    icon: "html5.svg",
  },
  {
    name: "CSS",
    icon: "css.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss.svg",
  },
  {
    name: "JavaScript",
    icon: "javascript.svg",
  },
  {
    name: "TypeScript",
    icon: "typescript.svg",
  },
  {
    name: "Node.js",
    icon: "nodedotjs.svg",
  },
  {
    name: "React",
    icon: "react.svg",
  },
  {
    name: "Firebase",
    icon: "firebase.svg",
  },
  {
    name: "shadcn/ui",
    icon: "shadcnui.svg",
  },
  {
    name: "Material UI",
    icon: "mui.svg",
  },
  {
    name: "Vite",
    icon: "vite.svg",
  },
  {
    name: "Git",
    icon: "git.svg",
  },
  {
    name: "GSAP",
    icon: "greensock.svg",
  },
];
const TechStack = () => {
  return (
    <div className="w-full flex justify-center items-start ">
      <Marquee
        autoFill={true}
        pauseOnHover={true}
        id="list"
        className="flex flex-row w-full p-1 overflow-hidden"
      >
        {techStack.map((tech) => {
          return (
            <div
              key={tech.name}
              className="relative flex items-center min-h-24 min-w-24 bg-dark drop-shadow-analogous drop-shadow-lg p-2 mx-5 rounded-t-xl group"
            >
              <img
                src={
                  tech.name === "Vite" ? "vite.svg" : `/tech-icons/${tech.icon}`
                }
                // alt={tech.name}
                className="min-h-full min-w-full "
              />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-0 truncate left-[50%] translate-x-[-50%]  pointer-events-none">
                {tech.name}
              </span>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default TechStack;
