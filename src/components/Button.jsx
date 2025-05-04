import React from "react";

const Button = ({ className, text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={
        "array font-thin px-4 py-1.5 rounded-full hover:opacity-80 transition-opacity  " +
        className
      }
    >
      {text}
    </button>
  );
};

export default Button;
