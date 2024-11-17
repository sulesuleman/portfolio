import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";
import useMediaQuery from "@mui/material/useMediaQuery";

const Projects = ({ openModal, setOpenModal }) => {
  const isBelowDesktopView = useMediaQuery("(max-width: 899px)");

  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          From web apps to mobile apps, delivering high-quality, scalable, and
          maintainable software solutions that meet the needs of our clients for
          4+ years. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            value="all"
            onClick={() => setToggle("all")}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "web app"}
            value="web app"
            onClick={() => setToggle("web app")}
          >
            WEB APP
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "mobile app"}
            value="mobile app"
            onClick={() => setToggle("mobile app")}
          >
            MOBILE APP
          </ToggleButton>
          {/* <Divider /> */}
        </ToggleButtonGroup>
        <CardContainer container xs={12} rowGap={7}>
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                even={isBelowDesktopView ? true : index % 2 === 0}
                setOpenModal={setOpenModal}
              />
            ))}
          {/* {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard
                project={project}
                even={isBelowDesktopView ? true : index % 2 === 0}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))} */}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
