import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { scrollToSection } from "../interactions/scroll-to-section";
import FadeContent from "../../animations/FadeContent";

gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          headerRef.current,
          {
            translateY: "0px",
            opacity: 1,
          },
          {
            willChange: "transform",
            translateY: "-100px",
            opacity: 0,
            ease: "expo.out",
            duration: 0.3,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "+=400 center",
              end: "+=300",
              toggleActions: "play none none reverse",
              scrub: 1,
            },
          }
        );
      });
      return () => ctx.revert();
    });

    mm.add("(max-width: 799px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          headerRef.current,
          {
            translateY: "0px",
            opacity: 1,
          },
          {
            willChange: "transform",
            translateY: "-100px",
            opacity: 0,
            ease: "expo.out",
            duration: 0.3,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "+=310 center",
              end: "+=300",
              toggleActions: "play none none reverse",
              scrub: 1,
            },
          }
        );
      });
      return () => ctx.revert();
    });
  }, []);

  return (
    <header ref={headerRef} className="fixed top-5 md:w-[60%] xs:w-[90%] z-50">
      <FadeContent
        className="w-full justify-between  flex flex-row items-center p-2"
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        delay={800}
      >
        <div
          className="array cursor-pointer"
          onClick={() => scrollToSection("hero-section")}
        >
          <span className="font-bold text-primary md:text-6xl xs:text-3xl drop-shadow-[0px_0px_5px_var(--color-primary)]">
            Cyr
          </span>
          <span className="md:text-6xl xs:text-3xl drop-shadow-[0px_0px_5px_var(--color-light)]">
            .us
          </span>
        </div>
        <div className="flex gap-4 font-array md:text-xl xs:text-sm">
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
  );
};

export default Header;
