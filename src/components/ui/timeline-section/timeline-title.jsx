import React from "react";

const TimelineTitle = (props) => {
  return (
    <>
      <h1 className="w-full">
        <a
          href={props.link}
          target="_blank"
          className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:bg-light after:h-[3px] after:w-[0px] hover:after:w-full after:transition-all display"
        >
          {props.name}
        </a>
      </h1>
      <p className="text-base mt-2">Techs used:</p>
      <p className="text-base ">{props.techs}</p>
    </>
  );
};

export default TimelineTitle;
