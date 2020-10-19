import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import useScreen from "../../hooks/useScreen";

//components
import Title from "../Title/Title";
import Container from "../Container/Container";

const About = () => {
  const { isDesktop, isMobile } = useScreen();

  return (
    <section id="about" className="relative text-white gradient">
      <Container>
        <Title className="text-white" text="about me" />

        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <Fade
              left={isDesktop}
              top={isMobile}
              duration={1000}
              distance="30px"
            >
              <div className="overflow-hidden rounded-full shadow-lg w-52 h-52 md:w-64 md:h-64 lg:w-96 lg:h-96">
                <img src="/me.jpg" alt="my-photo" className="" />
              </div>
            </Fade>
          </div>

          <div className="flex flex-col items-center justify-center space-y-5">
            <Fade
              top={isDesktop}
              bottom={isMobile}
              delay={1000}
              distance="30px"
            >
              <p className="">
                With user experience as my main focus, I love paying close
                attention to the smallest details when creating websites and web
                applications.This allows me to create truly unique experiences
                for my clients and their users.
              </p>
              <p className="">
                No matter your needs, be it a new custom-made website, a unique
                online store or have an idea for an engaging web application:
                Please feel free to{" "}
                <Link
                  to="contact"
                  smooth
                  duration={1000}
                  className="cursor-pointer text-tertiary"
                >
                  contact me
                </Link>{" "}
                so we can discuss the details!
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
