import React from "react";
import Tilt from "react-tilt";
import Fade from "react-reveal/Fade";
import useScreen from "../../hooks/useScreen";

const Project = ({ project }) => {
  const { isDesktop, isMobile } = useScreen();

  return (
    <div className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-20">
      <Fade left={isDesktop} top={isMobile} duration={1000}>
        <div className={` lg:w-2/5 space-y-5 `}>
          <h1 className="text-2xl font-semibold capitalize">{project.title}</h1>

          <p>{project.description}</p>

          <div className="flex items-center space-x-5">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              See live
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block "
            >
              Source Code
            </a>
          </div>
        </div>
      </Fade>

      <Fade right={isDesktop} bottom={isMobile} duration={1000}>
        <div className={`lg:w-3/5`}>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className="overflow-hidden rounded-md shadow-2xl Tilt-inner">
              <img
                src={project.image}
                alt="project-image"
                className="w-full h-full"
              />
            </div>
          </Tilt>
        </div>
      </Fade>
    </div>
  );
};

export default Project;
