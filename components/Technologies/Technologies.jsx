import React from "react";
import Fade from "react-reveal/Fade";
import useScreen from "../../hooks/useScreen";
import Image from "next/image";

import contentful from "../../public/images/logos/contentful.png";
import firebase from "../../public/images/logos/firebase.png";
import next from "../../public/images/logos/next.png";
import react from "../../public/images/logos/react.png";
import reactNative from "../../public/images/logos/react-native.png";
import node from "../../public/images/logos/node.png";
import shopify from "../../public/images/logos/shopify.png";
import netlify from "../../public/images/logos/netlify.png";
import flutter from "../../public/images/logos/flutter.png";
import materialui from "../../public/images/logos/materialui.png";
import mantine from "../../public/images/logos/mantine.png";
import tailwindcss from "../../public/images/logos/tailwindcss.png";

//components
import Title from "../Title/Title";
import Container from "../Container/Container";

const logos = [
  react,
  next,
  flutter,
  reactNative,
  tailwindcss,
  materialui,
  mantine,
  contentful,
  shopify,
  firebase,
  netlify,
  node,
];

const Technologies = () => {
  const { isDesktop, isMobile } = useScreen();

  return (
    <section>
      <Container>
        <Title text="technologies i use" />

        <div className="flex flex-col justify-center space-y-5">
          <Fade
            top={isDesktop}
            bottom={isMobile}
            duration={1000}
            distance="30px"
          >
            <p className="">
              The web is changing rapidly and with it the possibilities to
              implement websites and web applications. Following the modern
              JAMSTACK-philosophy and using tools like Static Site Generators,
              Headless CMS and a serverless architecture make it possible to
              create modern, state of the art web experiences.
            </p>

            <p className="">
              Until recently, creating dynamic websites with tools like
              Wordpress was common practice. Compared to modern technologies
              though, today this approach seems inflexible and clunky,
              especially regarding the performance of the resulting website.
            </p>

            <p className="">
              Javascript libraries like <strong>React</strong> and modern Static
              Site Generators like <strong>Nextjs</strong> allow for the
              creation of static assets (or server side rendering) with all the
              possibilities dynamic web applications have to offer. So you'll
              get the best of both worlds. That entails a range of advantages,
              especially regarding the performance, the flexibility, the
              security, the scalability and the costs of the resulting website.
              All while content creators - through the integration of a Headless
              CMS like <strong>Contentul</strong>- have the possibility, to
              flexibly adjust all of the content based on their requirements.
            </p>

            <p className="">
              Building truly native cross-platform mobile applications has also
              never been easier with <strong>Flutter</strong> &{" "}
              <strong>React-Native</strong>, now with a single code base, mobile
              applications can run on both IOS and Android platforms
            </p>

            <p className="">
              And that's what it's all about in the end: Creating the best
              possible experience for the client and for the user.
            </p>
          </Fade>
        </div>

        <div className="grid items-center grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {logos.map((logo, idx) => {
            return (
              <div className="w-36 lg:w-52" key={idx}>
                <Image src={logo} alt="" className="" placeholder="blur" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Technologies;
