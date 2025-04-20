import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const BlurText = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words", // 'words' or 'letters'
  direction = "top", // 'top' or 'bottom'
  threshold = 0.1,
  rootMargin = "0px",
  onAnimationComplete,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateText();
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const animateText = () => {
    const spans = ref.current.querySelectorAll("span");

    gsap.set(spans, {
      filter: "blur(10px)",
      opacity: 0,
      y: direction === "top" ? -50 : 50,
    });

    gsap.to(spans, {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      stagger: delay / 1000, // gsap uses seconds
      ease: "power3.out",
      onComplete: onAnimationComplete,
    });
  };

  return (
    <p
      ref={ref}
      className={`blur-text ${className} flex flex-wrap justify-center`}
    >
      {elements.map((char, index) => (
        <span
          key={index}
          className="inline-block will-change-[transform,filter,opacity]"
        >
          {char === " " ? "\u00A0" : char}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </span>
      ))}
    </p>
  );
};

export default BlurText;
