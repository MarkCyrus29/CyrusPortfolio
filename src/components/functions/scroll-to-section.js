export function scrollToSection ( section ) {
  const element = document.getElementById(section);
  if (element) {
    if (window.lenis) {
      window.lenis.scrollTo(element, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      });
    } else {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
