import React from "react";

const Title = ({ text, className }) => {
  return (
    <h1
      className={`font-semibold uppercase text-3xl md:text-4xl text-center tracking-wide ${className}`}
    >
      {text}
    </h1>
  );
};

export default Title;
