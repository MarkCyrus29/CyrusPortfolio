import React from "react";

const Icon = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      className="h-full z-[100] flex transition-all rounded-lg hover:bg-dark p-1.5 items-center justify-center"
    >
      <img
        src={props.img}
        alt={props.alt}
        className={
          "xs:h-5 md:h-4 2xl:h-6 w-auto hover:opacity-90 transition-opacity " +
          props.customStyle
        }
      />
    </a>
  );
};

export default Icon;
