
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:url("https://images.unsplash.com/photo-1629941199911-4c41a5de04ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60") center;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ backgroundRepeat: "no-repeat", backgroundSize:"cover"})}
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({ width: '75%'})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap ;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    font-family: inherit;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    border: none;
    background-color: black;
    color: white;
    font-family: inherit;
    cursor: pointer;

    &:hover{
    background-color: #ffffff;
    color: #000000;
    font-weight: 700;
    }
`

const Register = () => {
  return(
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="firstname"/>
                <Input placeholder="surname"/>
                <Input placeholder="email"/>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  );
};

export default Register;
