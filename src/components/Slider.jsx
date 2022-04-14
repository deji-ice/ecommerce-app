import React, { useState } from 'react';
import {ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import styled from 'styled-components';
import { sliderItems } from '../data';
import { mobile } from "../responsive"


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: 'none'})}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px; 
    background-color: #c0c0c0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center ;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "Left" && '10px'};
    right: ${props => props.direction === "Right" && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease-out;
    transform: translateX(${props => props.slideIndex * -100}vw) 
`
const SlideContainer = styled.div`
    display: flex;
    align-items: center; 
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg};

`
const ImageContainer = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    height: 100%;

`
const Image = styled.img`
    height: 98%;
    object-fit: contain;
    width: 800px
`
const InfoContainer = styled.div`
    flex: 1;
    object-fit: contain;
    padding: 30px;
`
const Title = styled.h1`
    font-size: 60px;
`
const Description = styled.p`
    margin: 30px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction)=>{
        if(direction=== "Left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }

  return(
    <Container>
        <Arrow direction= 'Left' onClick={()=> handleClick('Left')}>
            <ArrowLeftOutlined/>
        </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((items)=>(
                <SlideContainer bg={items.background} key={items.id}>
                <ImageContainer>
                    <Image src = {items.image}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{items.title}</Title>
                    <Description>{items.description}</Description>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </SlideContainer>
                ))
            }
            </Wrapper>
        <Arrow direction= 'Right' onClick={()=> handleClick('Right')}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  );
};

export default Slider;
