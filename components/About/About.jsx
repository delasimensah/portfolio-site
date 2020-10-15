import React from "react";
import Image from "next/image";
import myPic from "../../public/me.jpg";
import Fade from "react-reveal/Fade";

//components
import Title from "../Title/Title";
import Container from "../Container/Container";

const About = () => {
  return (
    <section id="about" className="h-auto gradient text-white relative">
      <Container className="pt-20 space-y-10">
        <Title className="text-white" text="about me" />

        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex justify-center items-center">
            <Fade left duration={2000}>
              <div className="shadow-lg rounded-full overflow-hidden w-48 h-48 lg:w-96 lg:h-96">
                <img src="/me.jpg" alt="my-photo" className="" />
              </div>
            </Fade>
          </div>

          <div className="flex flex-col justify-center items-center space-y-5">
            <Fade top delay={1500}>
              <p className="">
                With user experience as my main focus, I love paying close
                attention to the smallest details when creating websites and web
                applications.This allows me to create truly unique experiences
                for my clients and their users.
              </p>
              <p className="">
                No matter your needs, be it a new custom-made website, a unique
                online store or have an idea for an engaging web application:
                Please feel free to contact me so we can discuss the details!
              </p>
            </Fade>
          </div>
        </div>
      </Container>

      <img src="/waves.svg" alt="waves" className="" />
    </section>
  );
};

export default About;
