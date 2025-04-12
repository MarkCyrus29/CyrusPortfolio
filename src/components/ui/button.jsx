import React from "react";
import ShinyText from "../../animations/ShinyText";

const Button = (props) => {
  return (
    <button
      className=" bg-primary text-xl font-bold py-3 px-6 rounded-full cursor-pointer"
      onClick={props.handleClick}
    >
      <ShinyText
        text={props.title}
        disabled={false}
        speed={2}
        className="custom-class"
      />
    </button>
  );
};

export default Button;
