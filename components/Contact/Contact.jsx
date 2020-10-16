import React from "react";

//components
import Title from "../Title/Title";
import Container from "../Container/Container";

const Contact = () => {
  return (
    <section id="contact" className="h-screen gradient">
      <img src="/waves.svg" alt="waves" className=" transform rotate-180" />
      <Title text="contact me" className="text-white" />
      <Container>contact</Container>
    </section>
  );
};

export default Contact;
