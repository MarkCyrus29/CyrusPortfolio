import React from "react";
import { scrollToSection } from "../functions/scroll-to-section";

const CyrusLogo = () => {
  return (
    <div
      className="array cursor-pointer z-30"
      onClick={() => scrollToSection("hero-section")}
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
