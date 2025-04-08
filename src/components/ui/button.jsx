import React from "react";

const Button = (props) => {
  return (
    <button
      className="my-5 bg-primary text-xl font-bold py-3 px-6 rounded-full cursor-pointer"
      onClick={props.handleClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
