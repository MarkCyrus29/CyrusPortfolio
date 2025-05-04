import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { scrollToSection } from "../functions/scroll-to-section";
import FadeContent from "../../animations/FadeContent";
import CyrusLogo from "../ui/cyrus-logo";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const scrollPositionRef = React.useRef(0);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setIsOpen(false); // Ensure it's always false on initial render
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Lock scroll: save scroll and fix body position
      scrollPositionRef.current = window.scrollY || window.pageYOffset;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      // Unlock scroll: reset body position and restore scroll
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  const handleScrollToSection = (sectionId) => {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    handleClick();

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-5 md:w-[60%] xs:w-[90%] z-50"
      >
        <FadeContent
          className="w-full justify-between flex flex-row items-center p-2"
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          delay={800}
        >
          <CyrusLogo />
          <div className="flex md:hidden z-50 sticky">
            <input
              type="checkbox"
              id="checkbox"
              className="hidden"
              onClick={handleClick}
            />
            <label
              htmlFor="checkbox"
              className="relative w-6 h-6 cursor-pointer flex flex-col items-center justify-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div
                id="bar1"
                className="w-[70%] h-1 bg-[var(--color-light)] rounded "
              ></div>
              <div
                id="bar2"
                className="w-full h-1 bg-[var(--color-light)] rounded "
              ></div>
              <div
                id="bar3"
                className="w-[70%] h-1 bg-[var(--color-light)] rounded "
              ></div>
            </label>
          </div>
          <div className="gap-4 font-array md:text-xl xs:text-sm xs:hidden md:flex">
            <button
              className="hover:opacity-80 transition-opacity"
              onClick={() => scrollToSection("about-section")}
            >
              About
            </button>
            <button
              className="hover:opacity-80 transition-opacity"
              onClick={() => scrollToSection("project-section")}
            >
              Projects
            </button>
            <button
              className="hover:opacity-80 transition-opacity"
              onClick={() => scrollToSection("contact-section")}
            >
              Contact me!
            </button>
          </div>
        </FadeContent>
      </header>
      <div
        onClick={handleClick}
        className={
          "transition-all bg-bg/10 duration-[2000] fixed top-0 left-0 z-30 " +
          (isOpen && " xs:h-screen xs:w-[100%]")
        }
      />
      <div
        className={
          "z-50 absolute right-0 top-0 transition-all duration-300 xs:h-screen md:h-0 xs:bg-bg xs:border-l xs:border-l-dark xs:w-[60%] " +
          (!isOpen && " xs:!w-0")
        }
      >
        <div className="text-start mt-9 ml-10 items-start gap-4 font-array xs:text-xl md:hidden xs:flex xs:flex-col">
          <div
            className={
              "cursor-pointer self-end mr-8 flex md:hidden z-50 sticky opacity-100 transition-all duration-300" +
              (!isOpen && " !opacity-0")
            }
            onClick={handleClick}
          >
            <div className="relative w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity">
              <div className="absolute w-full h-1 bg-[var(--color-light)] rounded rotate-45" />
              <div className="absolute w-full h-1 bg-[var(--color-light)] rounded -rotate-45" />
            </div>
          </div>
          <button
            className="hover:opacity-80 transition-opacity"
            onClick={() => handleScrollToSection("about-section")}
          >
            About
          </button>
          <button
            className="hover:opacity-80 transition-opacity"
            onClick={() => handleScrollToSection("project-section")}
          >
            Projects
          </button>
          <button
            className="hover:opacity-80 transition-opacity"
            onClick={() => handleScrollToSection("contact-section")}
          >
            Contact me!
          </button>

          <p className="absolute bottom-5 md:text-sm xs:text-xs text-gray md:my-1">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
