import React from "react";

// mantine
import { Tabs } from "@mantine/core";

//components
import Title from "../Title/Title";
import Container from "../Container/Container";
import Project from "../Project/Project";
// import MobileProject from "../Project/MobileProject";

//utils
import web from "../../utils/webProjects";
// import mobile from "../../utils/mobileProjects";

const Projects = () => {
  return (
    <section className="text-tertiary">
      <Container>
        <Title text="projects" />

        <p className="text-lg font-medium text-center">
          The projects below are a combination of personal and client projects
          to showcase the value I can bring to your projects.
        </p>

        <Tabs
          position="center"
          grow
          classNames={{
            tabLabel: "font-raleway text-base",
          }}
          variant="pills"
        >
          <Tabs.Tab label="Web">
            {" "}
            <div className="py-16 space-y-28">
              {web.map((project, idx) => {
                return <Project project={project} idx={idx} key={idx} />;
              })}
            </div>
          </Tabs.Tab>

          {/* <Tabs.Tab label="Mobile">
            <div className="py-16 space-y-28">
              {mobile.map((project, idx) => {
                return <MobileProject project={project} key={idx} />;
              })}
            </div>
          </Tabs.Tab> */}
        </Tabs>
      </Container>
    </section>
  );
};

export default Projects;
