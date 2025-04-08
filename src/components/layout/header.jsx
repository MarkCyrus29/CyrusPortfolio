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
        translateY: "-100px",
        ease: "expo.out",
        duration: 0.5,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "center center",
          end: "+=400",
          toggleActions: "play none none reverse",
          scrub: 1,
          markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header className="w-full flex justify-center ">
        <div ref={headerRef} className="fixed h-full top-8 w-[60%] ">
          <div className="w-full justify-between flex flex-row items-center bg-bg/90 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 p-2">
            <div>
              <span className="font-bold text-primary text-4xl">Cyr</span>
              <span className="text-4xl">.us</span>
            </div>
            <div className="flex gap-4">
              <a href="">About</a>
              <a href="">Projects</a>
              <a href="">Contact Me!</a>
            </div>
          </div>
        </div>
      </header>
      <Navbar headerRef={headerRef}/>
    </>
  );
};

export default Header;
