import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import useScreen from "../../hooks/useScreen";
import Image from "next/image";

// mantine
import { Modal, Button, Group } from "@mantine/core";

const MobileProject = ({ project }) => {
  const { isDesktop, isMobile } = useScreen();
  const [opened, setOpened] = useState(false);

  const { title, description, images, screenshots, github } = project;

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <Fade left={isDesktop} top={isMobile} duration={1000} distance="10px">
        <div className="space-y-5">
          <h1 className="text-2xl font-semibold capitalize">{title}</h1>

          <p>{description}</p>

          <div className="flex items-center space-x-5">
            <button className="btn-primary" onClick={() => setOpened(true)}>
              View Screenshots
            </button>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block "
              >
                Source Code
              </a>
            )}
          </div>
        </div>
      </Fade>

      <Fade
        right={isDesktop}
        bottom={isMobile}
        duration={1000}
        delay={100}
        distance="10px"
      >
        <div className="flex justify-center space-x-5">
          {images.map((img, idx) => {
            return (
              <div className="relative h-80 w-full md:h-[350px] lg:h-[400px]">
                <Image
                  src={img}
                  key={idx}
                  alt=""
                  layout="fill"
                  placeholder="blur"
                  objectFit="contain"
                />
              </div>
            );
          })}
        </div>
      </Fade>

      <Modal
        size="full"
        overflow="inside"
        centered
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <div className="grid grid-cols-5 gap-5">
          {screenshots.map((img, idx) => {
            return (
              <div className="relative h-80 w-full md:h-[350px] lg:h-[400px]">
                <Image
                  src={img}
                  key={idx}
                  alt=""
                  layout="fill"
                  placeholder="blur"
                  objectFit="contain"
                />
              </div>
            );
          })}
        </div>
      </Modal>
    </div>
  );
};

export default MobileProject;
