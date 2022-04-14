import React from 'react';
import Annoucment from '../components/Annoucment';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';


const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;

${mobile({ padding:"10px"})}
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
    padding: 10PX;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"} ;
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};

`
const TopTexts = styled.div`
${mobile({ display:"none"})}
`
const TopText = styled.span`
cursor: pointer;
text-decoration: underline;
margin: 0px 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;

${mobile({ flexDirection: 'column'})}
`
const Info = styled.div`
flex: 3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: 'column'})}
`
const ProductDetails = styled.div`
flex: 2;
display: flex;
`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.div`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
/* background: rgb(0,0,0);
background: -moz-radial-gradient(circle, rgba(0,0,0,1) 31%, rgba(52,176,148,1) 63%, rgba(255,255,255,1) 85%);
background: -webkit-radial-gradient(circle, rgba(0,0,0,1) 31%, rgba(52,176,148,1) 63%, rgba(255,255,255,1) 85%);
background: radial-gradient(circle, rgba(0,0,0,1) 31%, rgba(52,176,148,1) 63%, rgba(255,255,255,1) 85%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#ffffff",GradientType=1); */
background-color: ${props=> props.color };
`
const ProductSize = styled.span`

`
const PriceDetails = styled.span`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const AmountContainer = styled.span`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const Amount = styled.span`
font-size: 24px;
margin: 5px;

${mobile({ margin: "5px 15px"})}
`
const ProductPrice = styled.span`
font-weight: 200;
font-size: 30px;

${mobile({ marginBottom: '20px'})}
`
const Hr =styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgrey;
border-radius: 10px;
padding: 20px;
height: 50vh;

`
const SummaryTitle = styled.h1`
font-weight: 200;

`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText= styled.span`

`
const SummaryItemPrice = styled.span`

`
const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
font-family: inherit;
border: none;
cursor: pointer;

&:hover{
    background-color: transparent;
    color: black;
    border: 1px solid black;
}
`

const Cart = () => {
    return( <Container>
            <Navbar/>
            <Annoucment/>
            <Wrapper>
                <Title>YOUR DOUFEL BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                        <ProductDetails>
                            <Image src='https://images.footlocker.com/is/image/EBFL2/D5189001?wid=500&hei=500'/>
                            <Details>
                                <ProductName><b>Product: </b> Nike Air Vapormax Plus </ProductName>
                                <ProductId><b>ID: </b>2779442130</ProductId>
                                <ProductColor color='black'/>
                                <ProductSize><b>Size</b> 43</ProductSize>
                            </Details>
                            </ProductDetails>

                            <PriceDetails>
                                <AmountContainer>
                                    <Add/>
                                    <Amount>2</Amount>
                                    <Remove/>
                                </AmountContainer>
                                
                                <ProductPrice>$ 650</ProductPrice>
                            </PriceDetails>

                        </Product>
                        <Hr/>
                        <Product>
                        <ProductDetails>
                            <Image src='https://cdn-images.farfetch-contents.com/15/62/59/37/15625937_28645464_300.jpg'/>
                            <Details>
                                <ProductName><b>Product: </b>Foam RNNR “Ararat” sneakers</ProductName>
                                <ProductId><b>ID: </b>27725288230</ProductId>
                                <ProductColor color='lightgrey'/>
                                <ProductSize><b>Size</b> 44</ProductSize>
                            </Details>
                            </ProductDetails>

                            <PriceDetails>
                                <AmountContainer>
                                    <Add/>
                                    <Amount>1</Amount>
                                    <Remove/>
                                </AmountContainer>
                                
                                <ProductPrice>$ 220</ProductPrice>
                            </PriceDetails>

                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 670</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 20</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -20</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem  type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 670</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT NOW</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
  )
};

export default Cart;
