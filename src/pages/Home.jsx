import React from 'react';
import Annoucment from '../components/Annoucment';
import Catergory from '../components/Catergory';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import ProductsList from '../components/ProductsList';
import Slider from '../components/Slider';

const Home = () => {
  return <div>
      <Annoucment/>
      <Navbar/>
      <Slider/>
      <Catergory/>
      <ProductsList/>
      <Newsletter/>
      <Footer/>
  </div>
};

export default Home;
