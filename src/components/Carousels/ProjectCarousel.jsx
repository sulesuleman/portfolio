// import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
// import React from 'react'
// import Slider from 'react-slick';
// import styled from 'styled-components';


// const ProjectImageCarousel = ({ images }) => {

//  const settings = {
//     className: "gallery",
//     dots: false,
//     arrows: false,
//     infinite: true,
//     slidesToShow: 1,
//     slidesOnScroll: 1,
//     autoplay: true,
//     speed:1000,
//     padding: "10px",
//     adaptiveHeight: true
//   };
//     return (
//       <Slider {...settings} >
//         {
//             images.map((image, index) => (
//                 <ImageContainer key={index}>
//                      <Image src={image} alt={`project-${image}-${index}`}/>
//                 </ImageContainer>
//             ))
//         }
//       </Slider>
//     )
// }

// export default ProjectImageCarousel

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// Styled Components
const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  margin: auto;
  border-radius: 10px;
  scroll-snap-type: x mandatory;
  `;
  
  const CarouselWrapper = styled(motion.div)`
  display: flex;
  scroll-snap-align: start;
  scroll-behavior: smooth;
`;

const ImageContainer = styled.div`
  flex: 0 0 100%;
  scroll-snap-align: center;
  border-radius: 10px;
  width: 100%;
  height: 400px;
  @media (max-width: 899px) {
    height: auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  // object-fit: cover;
  border-radius: 10px;
  @media (max-width: 899px) {
    height: auto;
  }
`;

const ProjectImageCarousel = ({ images }) => {
  const items = images || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <CarouselContainer>
      <CarouselWrapper
        initial={{ x: 0 }}
        animate={{ x: -currentIndex * 100 + "%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {items.map((item, index) => (
          <ImageContainer key={index}>
            <Image src={item} alt={`project-${item}-${index}`} />
          </ImageContainer>
        ))}
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default ProjectImageCarousel;