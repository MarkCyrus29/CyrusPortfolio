import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import projectsIcon from "../../assets/navbar/projects.svg";
import homeIcon from "../../assets/navbar/home.svg";
import aboutIcon from "../../assets/navbar/about.svg";
import contactIcon from "../../assets/navbar/contact.svg";
import githubIcon from "../../assets/navbar/github.svg";
import linkedinIcon from "../../assets/navbar/linkedin.svg";
import Icon from "../ui/icons-with-tooltips";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navbarRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navbarRef.current,
        { translateY: "200px", opacity: 0 },
        {
          translateY: "0px",
          opacity: 1,
          ease: "expo.out",
          duration: 0.5,
          scrollTrigger: {
            trigger: navbarRef.current,
            start: "-=500 center",
            end: "+=350",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex    justify-center ">
      <nav
        ref={navbarRef}
        className="xs:hidden md:flex md:fixed md:opacity-100 md:bottom-5 xs:opacity-0  xs:bottom-0 flex justify-center w-[30%] "
      >
        <div className="flex flex-row p-3 group  rounded-full items-center gap-3 w-max h-max px-4 bg-dark/80  backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 transform-gpu [border:1px_solid_var(--color-dark)] [box-shadow:0_-20px_80px_-20px_var(--color-bg)_inset] scale-85 transition-all duration-300 hover:scale-90 md:z-10 xs:-z-10 ">
          <Icon
            title="Home"
            className="navbar-icon"
            icon={homeIcon}
            section="hero-section"
          />
          <Icon
            title="About"
            className="navbar-icon"
            icon={aboutIcon}
            section="about-section"
          />
          <Icon
            title="Projects"
            className="navbar-icon"
            icon={projectsIcon}
            section="project-section"
          />
          <Icon
            title="Contact"
            className="navbar-icon"
            icon={contactIcon}
            section="contact-section"
          />

          <span className="scale-125 group-hover:scale-150 transition duration-300 font-thin self-center pointer-events-none text-gray">
            |
          </span>
          <div className="flex flex-row items-center gap-2 w-max h-max">
            <a href="https://github.com/MarkCyrus29" target="_blank">
              <img
                className="navbar-icon !h-5  !object-cover"
                src={githubIcon}
                alt="github icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/markcyrus-serrano"
              target="_blank"
            >
              <img
                className="navbar-icon !h-6 "
                src={linkedinIcon}
                alt="linkedin icon"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
