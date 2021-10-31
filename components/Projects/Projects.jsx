import React from "react";

//components
import Title from "../Title/Title";
import Container from "../Container/Container";
import Project from "../Project/Project";

//utils
import { projects } from "../../utils/projects";

const Projects = () => {
  return (
    <section className="text-tertiary">
      <Container>
        <Title text="projects" />

        <p className="text-lg font-medium text-center">
          The projects below are a combination of personal and client projects
          to showcase the value I bring to your project.
        </p>

        <div className="space-y-28 ">
          {projects.map((project, idx) => {
            return <Project project={project} idx={idx} key={idx} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
