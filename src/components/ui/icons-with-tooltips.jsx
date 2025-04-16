import React from "react";
import { Tooltip } from "react-tooltip";

const Icon = (props) => {
  return (
    <>
      <Tooltip id="tooltip" />
      <a
        data-tooltip-delay-show={300}
        data-tooltip-delay-hide={100}
        data-tooltip-id="tooltip"
        data-tooltip-content={props.title}
        data-tooltip-place="top"
        data-tooltip-variant="light"
        onClick={props.handleClick}
      >
        <img
          className={props.className}
          src={props.icon}
          alt={props.title + " icon"}
        />
      </a>
    </>
  );
};

export default Icon;
