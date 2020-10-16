import React from "react";

//components
import Title from "../Title/Title";
import Container from "../Container/Container";
import Project from "../Project/Project";

//utils
import { projects } from "../../utils/projects";

const Projects = () => {
  return (
    <div className="">
      <Title text="projects" className="text-tertiary" />

      <Container className="space-y-28 my-20 ">
        {projects.map((project, idx) => {
          return <Project project={project} idx={idx} key={idx} />;
        })}
      </Container>
    </div>
  );
};

export default Projects;
