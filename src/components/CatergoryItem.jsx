import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import { mobile } from '../responsive';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    align-items: center;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: '30vh'})}
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left :0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;

`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: #3f3e3e;
    cursor: pointer;
    font-weight: 600;
    font-family : inherit;
`

const CatergoryItem = ({items}) => {
    return( <Container>
        <Link to={`/products/${items.cat}`}>
             <Image src = {items.image}/>
             <Info>
                 <Title>{items.title}</Title>
                 <Button>SHOP NOW</Button>
             </Info>
        </Link>
        </Container>
        )
};

export default CatergoryItem;
