import React from "react";

//components
import Title from "../Title/Title";
import Container from "../Container/Container";

const Projects = () => {
  const projects = [
    {
      title: "Project Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo molestias architecto eligendi, facere doloremque ab ad recusandae reprehenderit accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo molestias architecto eligendi, facere doloremque ab ad recusandae reprehenderit accusamus.",
      demo: "https://digitalnomadgh.com/",
      github: "https://github.com/delasimensah/portfolio-site",
      image: "/me.jpg",
    },
  ];
  return (
    <div className="border border-black">
      <Title text="projects" className="text-tertiary" />

      <Container>projects</Container>
    </div>
  );
};

export default Projects;
