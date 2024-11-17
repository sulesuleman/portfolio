import React from "react";
import styled from "styled-components";
import { testimonials } from "../../data/constants";
import "./testimonial-carousel.styles.css";

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

const TestimonialSection = styled.div`
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
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Testimonials</Title>
        {/* <Desc>
          My work experience as a software engineer and working on different
          companies and projects.
        </Desc> */}
        <TestimonialSection>
          <section class="carousel-section">
            <div class="carousal-wrapper">
              <div class="carousel">
                <button class="carousel-button carousel-button-left ">
                  <img src="/assets/carousel-arrow.svg" alt="left" />
                </button>
                <div class="carousel-track-container">
                  <ul class="carousel-track">
                    {testimonials.map((testimonial, index) => (
                      <li
                        key={testimonial.id}
                        class="carousel-slide current-slide"
                      >
                        <img
                          class="carousel-images"
                          src={testimonial?.image || ""}
                          alt={`${testimonial?.name}'s image`}
                        />
                        <div class="carousal-text-wrap">
                          <img
                            src="./assets/quotes.svg"
                            alt="quotations"
                            class="quotations-svg"
                          />
                          <div class="ct-wrap">
                            <p class="ct-heading">{testimonial.name}</p>
                            <pre class="ct-content">{testimonial.quote}</pre>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <button class="carousel-button carousel-button-right">
                  <img src="/assets/carousel-arrow.svg" alt="right" />
                </button>
              </div>
              <div class="carousel-nav">
                <button class="carousel-indicator current-slide"></button>
                <button class="carousel-indicator"></button>
                <button class="carousel-indicator"></button>
              </div>
            </div>
          </section>
        </TestimonialSection>
      </Wrapper>
    </Container>
  );
};

export default index;
