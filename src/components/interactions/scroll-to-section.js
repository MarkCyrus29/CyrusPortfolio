export function scrollToSection ( section ) {
  const element = document.getElementById(section);
  if (element) {
    // Use Lenis for smooth scrolling if you have it
    if (window.lenis) {
      window.lenis.scrollTo(element, {
        // Adjust this offset if needed
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      });
    } else {
      // Fallback to native smooth scroll
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
