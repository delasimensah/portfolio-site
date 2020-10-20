import React from "react";
import Fade from "react-reveal/Fade";

const Title = ({ text, className }) => {
  return (
    <Fade top cascade duration={800} distance="60px">
      <h1
        className={`font-semibold uppercase text-3xl md:text-4xl text-center tracking-wide ${className}`}
      >
        {text}
      </h1>
    </Fade>
  );
};

export default Title;
