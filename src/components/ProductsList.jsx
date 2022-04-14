import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { popularPs } from '../data';
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const ProductsList = ({cat,filters,sort}) => {

  const [products, setProducts]= useState([])
  const [filteredProducts, setFilteredProducts]= useState([])

  useEffect(()=>{
    const getProducts = async ()=>{
     try{
      const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}`
                                      : 'http://localhost:5000/api/products')
      setProducts(res.data)
      }catch(err){

      }
    }
    getProducts()
  },[cat])

  useEffect(()=>{
    cat && setFilteredProducts(
      products
    )
  },[cat,filters])

  return(
        <Container>
            {popularPs.map((items)=>(
            <Product items = {items} key={items.id}/>
        ))}
        </Container>
  );
};

export default ProductsList;
