import "../styles/shinytext.css";

const ShinyText = ({ text, disabled = false, speed = 2, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`shiny-text transition-color duration-500 ${disabled ? "disabled" : ""} ${className}`}
      style={{ animationDuration }}
      aria-disabled={disabled}
    >
      {text}
    </span>
  );
};

export default ShinyText;
