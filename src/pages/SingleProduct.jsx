import React from 'react';
import styled from 'styled-components';
import Annoucment from '../components/Annoucment';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';


const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection:"column"})}
`
const ImgContainer =styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;

    ${mobile({ height: '40vh'})}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: '10px'})}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`

    margin: 20px 0px;    
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;

`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
    ${mobile({ width: '100%'})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    margin-right: 10px;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color:${props=> props.color};
    border: 1px solid black;
    cursor: pointer;
    margin: 0px 5px;

    &:hover{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    transition: all 0.5s ease;
    }
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
    
`
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;

    ${mobile({ width: '100%'})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
`
const Amount = styled.span`
    font-weight: 700;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid black;
    justify-content: center;
    display: flex;
    align-items: center;
    margin: 5px;
`
const Button = styled.button`
    background-color: white;
    padding: 15px;
    border: 2px solid black;
    font-family: inherit;
    font-weight:600;
    cursor: pointer;

    &:hover{
    background-color: #000000;
    color: white;
    }
`


const SingleProduct = () => {
  return(
    <Container>
        <Navbar/>
        <Annoucment/>
        <Wrapper>
            <ImgContainer>
            <Image src= "https://www.prada.com/content/dam/pradanux_products/2/2EE/2EE342/3L09F0002/2EE342_3L09_F0002_SLR.png"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Prada Monolith brushed leather and nylon lace-up shoes</Title>
                <Desc>
                    Named after its maxi rubber sole, this shoe is an expression of a timeless design,
                    monolithic and unique for its research, innovation and style. The upper of these lace-ups, inspired by formal footwear for men, creates a dialog with the lines of the sole inspired by the uniform,
                    combining concepts like protection and modernism with the brand's emblematic elegance.
                    </Desc>
                <Price>$ 850</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color= "Black"/>
                        <FilterColor color= "White"/>
                        <FilterColor color= "Gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption selected >M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/> 
        <Footer/>
    </Container>

  );
};

export default SingleProduct;
