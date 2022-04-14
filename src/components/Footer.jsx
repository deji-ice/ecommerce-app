import {EmailOutlined, Facebook, GitHub,Instagram, Phone, Room, Twitter } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column'})}
`
const Left = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    font-weight: 900;
    font-style: italic;
`
const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 500;
`
const  Social =styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: 'none'})}
`
const Title = styled.h2`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItems = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  font-weight: 500;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ background: '#ececec' })}
`
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  cursor: pointer;
  font-weight: 500;
  ${mobile({ })}
`
const Payment = styled.img`
  cursor: pointer;
  width: 60%;
`

const Footer = () => {
  return(
        <Container>
            <Left><Logo>DRIPPED</Logo>
            <Desc>
              Be Anonymous
              We never display your email ID or your personal information to other users. You can choose to hide identity.
              Know Inside Culture
              Read reviews and prepare for interviews shared by employees and know inside culture.
            </Desc>
            <Social>
              <SocialIcon color='3B5999'>
                <Facebook/>
              </SocialIcon >
              <SocialIcon color='E4405F'>
                <Twitter/>
              </SocialIcon>
              <SocialIcon color='55ACEE'>
                <Instagram/>
              </SocialIcon>
            </Social>
            </Left>

            <Center>
              <Title>Useful Links.</Title>
              <List>
                <ListItems>Home</ListItems>
                <ListItems>Cart</ListItems>
                <ListItems>Mens Fashion</ListItems>
                <ListItems>Womens Fashion</ListItems>
                <ListItems>Shoes</ListItems>
                <ListItems>My Account</ListItems>
                <ListItems>Order Tracking</ListItems>
                <ListItems>Wishlist</ListItems>
                <ListItems>Terms</ListItems>
              </List>
            </Center>

            <Right>
              <Title>Contact</Title>
              <ContactItem><Room style={{marginRight: "10px"}}/>Lagos, Nigeria</ContactItem>
              <ContactItem> <Phone style={{marginRight: "10px"}}/> +234 701 397 2792</ContactItem>
              <ContactItem> <EmailOutlined style={{marginRight: "10px"}}/> ayodejiatanda1@gmail.com</ContactItem>
              <ContactItem><GitHub /></ContactItem>
                <Payment src= "https://www.projectplus.com.ng/wp-content/uploads/2018/08/pay_paystack.png"/>
            </Right>
        </Container>
  );
};

export default Footer;
