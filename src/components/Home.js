import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import "./Navbar.css";
import Facts from './Facts';
import Features from './Features';
import Testimonials from './Testimonials'; // Import Testimonials

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <Carousel />
      <Facts />
      <Features />
      <Testimonials /> {/* Add Testimonials here */}
    </div>
  );
}

export default Home;
