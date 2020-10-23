import React, { useRef, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Typed from "typed.js";
import { Link } from "react-scroll";
import useScreen from "../../hooks/useScreen";

//components
import Container from "../Container/Container";

const Hero = () => {
  const h1 = useRef();
  const h2 = useRef();
  const typed = useRef();
  const typed2 = useRef();

  const { isMobile, isDesktop } = useScreen();

  useEffect(() => {
    const options1 = {
      strings: [`Hello, my name is `],
      typeSpeed: 60,
      showCursor: false,
    };

    const options2 = {
      strings: [`I am a React Developer`],
      typeSpeed: 60,
      startDelay: 2500,
      showCursor: false,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(h1.current, options1);
    typed2.current = new Typed(h2.current, options2);

    return () => {
      typed.current.destroy();
      typed2.current.destroy();
    };
  }, []);

  return (
    <header id="top" className="flex items-center min-h-screen">
      <Container className="space-y-4 text-tertiary">
        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-3">
          <h1 ref={h1} className="heading" />
          <Fade top delay={1500} distance="60px">
            <p className="text-transparent heading bg-clip-text gradient">
              Delasi Mensah
            </p>
          </Fade>
        </div>

        <h2 className="heading" ref={h2} />

        <div className="flex justify-center pt-5 md:block">
          <Fade left={isDesktop} bottom={isMobile} delay={4500} distance="30px">
            <Link to="about" smooth duration={1000} className="btn-primary">
              Know More
            </Link>
          </Fade>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
