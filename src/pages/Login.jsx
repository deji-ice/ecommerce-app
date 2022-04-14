import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:url("https://wallpaperaccess.com/full/472411.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({ width: '75%'})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    font-family: inherit;
`

const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    border: none;
    background-color: black;
    color: white;
    font-family: inherit;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover{
    background-color: #ffffff;
    color: #000000;
    font-weight: 700;
    border: 1px solid black;
    }
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 13px;
    text-decoration: underline;
    cursor: pointer;

    &:hover{
    text-decoration: wavy;
    }
`
const Login = () => {
    return(
        <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>Forgot password?</Link>
                <Link>Create new account</Link>
            </Form>
        </Wrapper>
        </Container>
    );
};

export default Login;
