import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import projectsIcon from "../../assets/navbar/projects.svg";
import homeIcon from "../../assets/navbar/home.svg";
import contactIcon from "../../assets/navbar/contact.svg";
import githubIcon from "../../assets/navbar/github.svg";
import linkedinIcon from "../../assets/navbar/linkedin.svg";
import Icon from "../ui/icons-with-tooltips";
gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ headerRef }) => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navbarRef.current,
        {
          translateY: "200px",
        },
        {
          translateY: "0",
          ease: "expo.out",
          duration: 0.5,
          // Use will-change for GPU boost
          willChange: "transform",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "center center",
            end: "+=400",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav className="w-full flex justify-center">
      <div
        ref={navbarRef}
        className="fixed bottom-5 p-3 group  rounded-full border z-50  mx-auto flex  hoveitems-center px-4 bg-dark/80  backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 transform-gpu [border:1px_solid_#2e2e2e] [box-shadow:0_-20px_80px_-20px_#1f1f1f_inset] "
      >
        <div className="flex flex-row  items-center gap-3 w-max h-max">
          <Icon title="Home" className="navbar-icon" icon={homeIcon} />
          <Icon title="Projects" className="navbar-icon" icon={projectsIcon} />
          <Icon title="Contact" className="navbar-icon" icon={contactIcon} />

          <span className="scale-125 group-hover:scale-150 transition duration-300 font-thin self-center pointer-events-none text-gray">
            |
          </span>
          <div className="flex flex-row items-center gap-2 w-max h-max">
            <a href="https://github.com/MarkCyrus29" target="_blank">
              <img
                className="navbar-icon !h-5  !object-cover"
                src={githubIcon}
                alt="phone icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/markcyrus-serrano"
              target="_blank"
            >
              <img
                className="navbar-icon !h-6 "
                src={linkedinIcon}
                alt="phone icon"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
