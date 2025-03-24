import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import OutlinedButton from "../Buttons/OutlinedButton";
import ProjectImageCarousel from "../Carousels/ProjectCarousel";

const Card = styled(Grid)`
  width: 100%;
  justify-content: space-evenly;
  padding: 26px 20px;
  gap: 14px;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin: 17px 0;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 14px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  margin-top: 8px;
  font-size: 14px;
  text-align: justify;
  //   display: -webkit-box;
  //   max-width: 100%;
  //   -webkit-line-clamp: 3;
  //   -webkit-box-orient: vertical;
  //   text-overflow: ellipsis;
`;

const ProjectCards = ({ project, even }) => {
  return (
    <motion.div
      key={project.id}
      className={`project_card-${project.id}`}
      initial={"hidden"}
      whileInView={"visible"}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <Card
        container
        rowGap={5}
        sx={{ flexDirection: even ? "row" : "row-reverse" }}
      >
        <Grid item xs={12} md={5}>
          <Details>
            <Title>{project.title}</Title>
            <Date>{project.date}</Date>
            <Description>{project.description}</Description>
          </Details>
          <Tags>
            {project.tags?.map((tag, index) => (
              <Tag>{tag}</Tag>
            ))}
          </Tags>
          <OutlinedButton link={project.href}>Visit Website</OutlinedButton>
        </Grid>
        <Grid item xs={12} md={6}>
          <ProjectImageCarousel images={project.images} />
        </Grid>
      </Card>
    </motion.div>
  );
};

export default ProjectCards;
