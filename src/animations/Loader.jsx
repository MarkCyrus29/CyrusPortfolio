import React from "react";
import "../styles/loader.css";

const Loader = ({ progress }) => {
  return (
    <div className="h-dvh w-dvw flex flex-col justify-center items-center gap-8">
      <div className="typing-indicator">
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
      </div>
      <p className="array text-2xl">{progress}%</p>
    </div>
  );
};

export default Loader;
