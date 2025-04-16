import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./navbar";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headerRef.current, {
        // Use will-change for GPU boost
        willChange: "transform",
        translateY: "-100px",
        height: "0px",
        ease: "expo.out",
        duration: 0.5,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "center center",
          end: "+=300",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header className="w-full flex justify-center ">
        <div ref={headerRef} className="fixed h-full top-5 w-[60%] ">
          <div className="w-full justify-between  flex flex-row items-center p-2">
            <div className="array">
              <span className="font-bold text-primary text-6xl">Cyr</span>
              <span className="text-6xl">.us</span>
            </div>
            <div className="flex gap-4 font-array text-xl ">
              <a href="">About</a>
              <a href="">Projects</a>
              <a href="">Contact Me!</a>
            </div>
          </div>
        </div>
      </header>
      <Navbar headerRef={headerRef} />
    </>
  );
};

export default Header;
