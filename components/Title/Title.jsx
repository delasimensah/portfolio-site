import React from "react";
import Fade from "react-reveal/Fade";

const Title = ({ text, className }) => {
  return (
    <Fade top duration={800} distance="60px">
      <h1
        className={`font-semibold uppercase text-3xl text-center tracking-widest ${className}`}
      >
        {text}
      </h1>
    </Fade>
  );
};

export default Title;
