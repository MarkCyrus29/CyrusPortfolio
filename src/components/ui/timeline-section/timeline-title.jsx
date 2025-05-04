import React from "react";

const TimelineTitle = (props) => {
  return (
    <div>
      <h1 className="w-full flex flex-col">
        <a
          href={props.link}
          target="_blank"
          className="relative break-all text-light/80 display hover:text-light/60 transition-colors xs:text-4xl md:text-2xl lg:text-5xl"
        >
          {props.name}
        </a>
      </h1>
      <div className="flex flex-row gap-2 flex-wrap mt-3">
        {props.techs.map((tech, index) => {
          return (
            <p
              key={index}
              className="text-xs  inline h-full border text-light border-dark bg-dark/70 px-2 py-1 rounded-lg cursor-default hover:bg-dark/65 transition-colors text-shadow-xs text-shadow-bg truncate"
            >
              {tech}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineTitle;
