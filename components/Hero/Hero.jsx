import React, { useRef, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Typed from "typed.js";
import { Link } from "react-scroll";

//components
import Container from "../Container/Container";

const Hero = () => {
  const h1 = useRef();
  const h2 = useRef();
  const typed = useRef();
  const typed2 = useRef();

  useEffect(() => {
    const options1 = {
      strings: [`Hi, my name is `],
      typeSpeed: 50,
      showCursor: false,
    };

    const options2 = {
      strings: [`I am a Frontend Developer`],
      typeSpeed: 50,
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
    <header className="h-screen flex items-center">
      <Container className="space-y-2 text-tertiary">
        <div className="flex items-center space-x-3">
          <h1 ref={h1} className="heading" />
          <Fade top delay={1500}>
            <p className="heading bg-clip-text text-transparent gradient">
              Delasi Mensah
            </p>
          </Fade>
        </div>

        <h2 className="heading" ref={h2} />

        <div className="pt-5">
          <Fade left delay={5000}>
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
