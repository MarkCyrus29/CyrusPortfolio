import React from "react";
import { Tooltip } from "react-tooltip";
import { scrollToSection } from "../functions/scroll-to-section";

const IconWithTooltips = (props) => {
  const section = props.section;
  return (
    <>
      <Tooltip id="tooltip" />
      <button
        data-tooltip-delay-show={300}
        data-tooltip-delay-hide={100}
        data-tooltip-id="tooltip"
        data-tooltip-content={props.title}
        data-tooltip-place="top"
        data-tooltip-variant="light"
        onClick={() => scrollToSection(section)}
      >
        <img
          className={props.className}
          src={props.icon}
          alt={props.title + " icon"}
        />
      </button>
    </>
  );
};

export default IconWithTooltips;
