import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import useScreen from "../../hooks/useScreen";

//components
import Title from "../Title/Title";
import Container from "../Container/Container";

const Contact = () => {
  const { isDesktop, isMobile } = useScreen();

  return (
    <section id="contact" className="pb-10 gradient">
      <img src="/waves.svg" alt="waves" className="transform rotate-180" />

      <Container>
        <Title text="contact" className="text-white" />
        <div className="py-10 space-y-7">
          <Zoom duration={1000} distance="30px">
            <p className="text-xl font-semibold tracking-wider text-center text-white md:text-3xl">
              Interested in hiring me? Kindly email me.
            </p>
          </Zoom>

          <div className="flex items-center justify-center">
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={800}
              distance="30px"
            >
              <a
                href="mailto:mensadelasi@gmail.com.com?subject=Job offer"
                className="btn-white"
              >
                email me
              </a>
            </Fade>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
