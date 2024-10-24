import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import "./Navbar.css";
import Facts from './Facts';
import Features from './Features';
import PopularProjects from './PopularProjects';
import PopularServices from './PopularServices';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='home-container'>
    <Navbar />
    <Carousel />
    <Facts></Facts>
    <Features /><hr></hr>
    <PopularProjects></PopularProjects>
    <hr></hr>
    <PopularServices></PopularServices>
    <Footer />

  </div>
  )
}

export default Home
