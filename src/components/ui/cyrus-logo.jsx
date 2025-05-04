import React from "react";

const CyrusLogo = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="array cursor-pointer z-30"
      onClick={() => handleScrollToSection("hero-section")}
    >
      <span className="font-bold text-primary md:text-6xl xs:text-4xl drop-shadow-[0px_0px_5px_var(--color-primary)] ">
        Cyr
      </span>
      <span className="md:text-6xl xs:text-4xl drop-shadow-[0px_0px_5px_var(--color-light)]">
        .us
      </span>
    </div>
  );
};

export default CyrusLogo;
