import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { scrollToSection } from "../interactions/scroll-to-section";

gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <header ref={headerRef} className="fixed top-5 w-[60%] ">
      <div className="w-full justify-between  flex flex-row items-center p-2">
        <div className="array ">
          <span className="font-bold text-primary text-6xl drop-shadow-[0px_0px_5px_var(--color-primary)]">
            Cyr
          </span>
          <span className="text-6xl drop-shadow-[0px_0px_5px_var(--color-light)]">
            .us
          </span>
        </div>
        <div className="flex gap-4 font-array text-xl">
          <button onClick={() => scrollToSection("project-section")}>
            Projects
          </button>
          <button onClick={() => scrollToSection("contact-section")}>
            Contact me!
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
