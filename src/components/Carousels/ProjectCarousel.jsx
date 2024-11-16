import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import React from 'react'
import Slider from 'react-slick';
import styled from 'styled-components';

const ImageContainer = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 400px;
`

const Image = styled.img`
    width: 100%;
    height: 400px;
    // background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    // box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const ProjectImageCarousel = ({ images }) => {

 const settings = {
    className: "gallery",
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesOnScroll: 1,
    autoplay: true,
    speed:1000,
    padding: "10px",
    adaptiveHeight: true
  };
    return (
      <Slider {...settings} >
        {
            images.map((image, index) => (
                <ImageContainer key={index}>
                     <Image src={image} alt={`project-${image}-${index}`}/>
                </ImageContainer>
            ))
        }
      </Slider>
    )
}

export default ProjectImageCarousel