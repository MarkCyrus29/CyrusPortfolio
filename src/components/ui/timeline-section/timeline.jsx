"use client";
import React, { useEffect, useRef, useState } from "react";
import FadeContent from "../../../animations/FadeContent";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const stickyBallsRef = useRef([]);
  const stickyContainersRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stickyBallsRef.current.forEach((ball, index) => {
        const container = stickyContainersRef.current[index];
        if (!ball || !container) return;

        gsap.fromTo(
          ball,
          {
            backgroundColor: "##191919",
            filter: "drop-shadow(0 0 5px #2e2e2e)",
          },
          {
            backgroundColor: "#bdbdbd",
            filter: "drop-shadow(0 0 25px #f4f4f4)",
            ease: "expo.out",
            scrollTrigger: {
              trigger: container,
              start: "bottom+=250 center",
              end: "bottom+=400 center",
              toggleActions: "play reverse play reverse",
              scrub: 1,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  return (
    <div className=" w-full font-sans md:px-10 relative" ref={containerRef}>
      <FadeContent
        className="max-w-7xl mx-auto md:py-0 px-4 md:px-8 lg:px-10 text-center flex  flex-col items-center justify-center   "
        blur={true}
        duration={500}
        easing="ease-out"
        initialOpacity={0}
        delay={200}
      >
        <p className="project-title array   xl:text-[7rem] lg:text-[5rem] md:text-[4rem] sm:[4rem] xs:text-[3rem] text-black dark:text-white max-w-9xl drop-shadow-[0px_0px_2px_var(--color-light),4px_6px_10px_var(--color-primary),-4px_-4px_10px_var(--color-analogous)] cursor-default text-center ">
          {"< Projects />"}
        </p>
        <p className="sans text-gray dark:text-gray text-sm md:text-sm xs:text-xs  md:w-[45%]  ">
          Listed are passion projects that showcase my web development journey,
          with my most recent work at the top.
        </p>
      </FadeContent>  
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 h-full">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex justify-start pt-10 h-full w-full ${index === 0 ? "md:pt-10" : "md:pt-40"}`}
          >
            <div
              ref={(el) => (stickyContainersRef.current[index] = el)}
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full h-full "
            >
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-dark flex items-center justify-center">
                <div
                  ref={(el) => (stickyBallsRef.current[index] = el)}
                  className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-dark p-2"
                />
              </div>
              <span className="hidden md:block xs:text-xl md:pl-20 md:text-5xl font-bold text-gray dark:text-gray w-full">
                {item.title}
              </span>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full h-full">
              <span className="md:hidden block text-2xl mb-4 text-left font-bold text-gray dark:text-gray">
                {item.title}
              </span>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
