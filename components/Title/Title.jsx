import React from "react";

const Title = ({ text, className }) => {
  return (
    <h1
      className={`font-medium uppercase text-3xl text-center tracking-wide ${className}`}
    >
      {text}
    </h1>
  );
};

export default Title;
