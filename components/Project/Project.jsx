import React from "react";
import Tilt from "react-tilt";
import Fade from "react-reveal/Fade";

const Project = ({ project, idx }) => {
  return (
    <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0">
      <Fade
        left={(idx + 1) % 2 === 0 ? false : true}
        right={(idx + 1) % 2 === 0 && true}
        duration={1000}
      >
        <div
          className={` lg:w-2/5 space-y-5  ${
            (idx + 1) % 2 === 0 ? "order-last mr-0 ml-20" : "mr-20 ml-0"
          }`}
        >
          <h1 className="capitalize font-medium text-2xl">{project.title}</h1>

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

      <Fade
        left={(idx + 1) % 2 === 0 ? true : false}
        right={(idx + 1) % 2 === 0 ? false : true}
        duration={1000}
      >
        <div className={`lg:w-3/5 ${(idx + 1) % 2 === 0 && "order-first"}`}>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className="Tilt-inner rounded-md overflow-hidden shadow-2xl">
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
