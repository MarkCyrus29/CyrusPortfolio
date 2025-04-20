import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SplitText = ({
  text = "",
  className = "",
  delay = 100,
  animationFrom = { opacity: 0, y: 40 },
  animationTo = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef();

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
    const spans = ref.current.querySelectorAll("span[data-letter]");

    gsap.set(spans, animationFrom);

    gsap.to(spans, {
      ...animationTo,
      stagger: delay / 1000, // convert to seconds
      ease: "power3.out",
      onComplete: onLetterAnimationComplete,
    });
  };

  const words = text.split(" ").map((word) => word.split(""));

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline ${className}`}
      style={{ textAlign, whiteSpace: "normal", wordWrap: "break-word" }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.map((letter, letterIndex) => {
            const index =
              words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) +
              letterIndex;
            return (
              <span
                key={index}
                data-letter
                className="inline-block transform opacity-0 will-change-transform"
              >
                {letter}
              </span>
            );
          })}
          <span style={{ display: "inline-block", width: "0.3em" }}>
            &nbsp;
          </span>
        </span>
      ))}
    </p>
  );
};

export default SplitText;
