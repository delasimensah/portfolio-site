import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`container mx-auto px-5 md:px-10 lg:px-20 py-20 ${
        className ? className : " space-y-20"
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
