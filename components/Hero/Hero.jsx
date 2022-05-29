import React, { useRef, useEffect, useState } from "react";
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
  const [visible, setVisible] = useState(false);

  const { isMobile, isDesktop } = useScreen();

  useEffect(() => {
    const options1 = {
      strings: [`Hi, my name is Delasi Mensah`],
      typeSpeed: 40,
      showCursor: false,
    };

    const options2 = {
      strings: [`I am a Web and Mobile Developer`],
      typeSpeed: 40,
      startDelay: 1500,
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

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 3200);
  }, []);

  return (
    <header id="top" className="flex items-center min-h-screen">
      <Container className="space-y-4 text-tertiary">
        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-3">
          <h1 ref={h1} className="heading" />
        </div>

        <h2 className="heading" ref={h2} />

        <div
          className={`${
            visible ? "flex" : "hidden"
          } justify-center md:justify-start pt-5`}
        >
          <Fade
            left={isDesktop}
            bottom={isMobile}
            // delay={4500}
            distance="10px"
            duration={1000}
          >
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
