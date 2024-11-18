import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ProjectImageCarousel from "../Carousels/ProjectCarousel";
import OutlinedButton from "../Buttons/OutlinedButton";
import { motion} from "framer-motion";

const ButtonContainer = styled.div`
  margin-top: 10px;
  // width: 30%;
`;

const Button = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
`;
const Card = styled(Grid)`
  width: 100%;
  // height: 490px;
  // background-color: ${({ theme }) => theme.card};
  // cursor: pointer;
  // border-radius: 10px;
  // box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
  // overflow: hidden;
  justify-content: space-evenly;
  padding: 26px 20px;
  gap: 14px;
  // transition: all 0.5s ease-in-out;
  // &:hover {
  //     transform: translateY(-10px);
  //     box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
  //     filter: brightness(1.1);
  // }
  // &:hover ${Button} {
  //     display: block;
  // }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
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

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCards = ({ project, setOpenModal, even }) => {

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
      <Card container xs={12} rowGap={5}>
        {!even && (
          <Grid item xs={12} md={6}>
            <ProjectImageCarousel images={project.images} />
          </Grid>
        )}
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
          {/* <ButtonContainer> */}
          <OutlinedButton link={project.href}>Visit Website</OutlinedButton>
          {/* </ButtonContainer> */}
        </Grid>
        {even && (
          <Grid item xs={12} md={6}>
            <ProjectImageCarousel images={project.images} />
          </Grid>
        )}
        {/* <Members>
                {project.member?.map((member) => (
                    <Avatar src={member.img}/>
                ))}
            </Members> */}
      </Card>
    </motion.div>
  );
};

export default ProjectCards;
