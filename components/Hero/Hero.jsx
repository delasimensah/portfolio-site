import React, { useRef, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Typed from "typed.js";

import styles from "./Hero.module.css";

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
      <div className="container mx-auto px-20 space-y-2 text-tertiary">
        <div className="flex items-center space-x-3">
          <h1 ref={h1} className={styles.heading} />
          <Fade top delay={1500}>
            <p
              className={`${styles.heading} bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary`}
            >
              Delasi Mensah
            </p>
          </Fade>
        </div>

        <h2 className={styles.heading} ref={h2} />
      </div>
    </header>
  );
};

export default Hero;
