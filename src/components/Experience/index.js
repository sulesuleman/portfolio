import React from "react";
import styled from "styled-components";
import { testimonials } from "../../data/constants";
import "./testimonial-carousel.styles.css";
import { Box, Paper, Typography } from "@mui/material";
import Slider from "react-slick";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const RecommendationSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
`;

const index = () => {
  const isBelowLargeScreen = window.innerWidth < 900;
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <Container id="experience">
      <Wrapper>
        <Title>Testimonials</Title>
        {/* <Desc>
          My work experience as a software engineer and working on different
          companies and projects.
        </Desc> */}
        <RecommendationSection>
          <Box
            sx={{
              width: "100%",
              maxWidth: "100%",
              margin: "0 auto",
              padding: isBelowLargeScreen ? "20px" : "36px",
            }}
          >
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <Paper
                  sx={{
                    elevation: 3,
                    padding: 4,
                    borderRadius: 2,
                    textAlign: "center",
                    margin: "0 auto",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <Typography variant="h6" sx={{ fontStyle: "italic", mb: 2 }}>
                    "{testimonial.quote}"
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    - {testimonial.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.organization}
                  </Typography>
                </Paper>
              ))}
            </Slider>
          </Box>
        </RecommendationSection>
      </Wrapper>
    </Container>
  );
};

export default index;
