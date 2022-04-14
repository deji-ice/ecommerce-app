import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: #01000a;
    color: white;
    display: flex;
    align-items: center;
    font-size: 14px;
    justify-content: center;
    font-weight: 500;
`

const Annoucment = () => {
  return( 
  <Container>
      The Best Deals To Shop Right Now: Brooklinen Comforters, HelloFresh Meals And More; $249SAVE $80 (32%).
  </Container>  
)};

export default Annoucment;
