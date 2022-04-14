import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import  Announcement from '../components/Annoucment';
import ProductsList from '../components/ProductsList';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer'
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';


const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilteredContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: '0px 20px', display:"flex", flexDirection:"column"})}
`
const FilteredText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: '0px'})}
`
const Select = styled.select`
    font-family: inherit;
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: '10px 0px'})}
`
const Option = styled.option`
    
`
const Products = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filters, setFilters]= useState({})
    const [sort, setSort]= useState("newest")
    const handleFilters = (e)=>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    }
  return(
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilteredContainer>
            <Filter><FilteredText>Filter Products:</FilteredText>
            <Select name = "brand" onChange={handleFilters}>
            <Option disabled >Brand</Option>
                <Option>Adidas</Option>
                <Option>Nike</Option>
                <Option>Prada</Option>
                <Option>Vans</Option>
            </Select>
            <Select name = "color" onChange={handleFilters}>
            <Option disabled >Color</Option>
                <Option>White</Option>
                <Option>Red</Option>
                <Option>Black</Option>
                <Option>Blue</Option>
            </Select>
            </Filter>
            <Filter><FilteredText>Sort Products</FilteredText>
            <Select onChange = {e => setSort(e.target.value)}>
                <Option value ="newest">Newest</Option>
                <Option value ="asc">Price (High)</Option>
                <Option value ="dsc">Price (Low)</Option>
            </Select>
            </Filter>
        </FilteredContainer>
        <ProductsList cat ={cat} filters = {filters} sort ={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
};

export default Products;
