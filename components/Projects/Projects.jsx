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
