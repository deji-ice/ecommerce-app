import React from 'react';
import styled from 'styled-components';
import { catergories } from '../data';
import CatergoryItem from './CatergoryItem'
import { mobile } from "../responsive"
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({flexDirection:"column", padding: "0px"})}
`

const Catergory = () => {
  return( <Container>
        {catergories.map((items)=>(
            <CatergoryItem items = {items} key={items.id}/>
        ))}
        </Container>
  )
};

export default Catergory;
