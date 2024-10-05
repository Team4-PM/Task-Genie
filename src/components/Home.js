import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import "./Navbar.css";
import Facts from './Facts';
import Features from './Features';
import Testimonials from './Testimonials';
import PopularProjects from './PopularProjects'; // Import the PopularProjects component

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <Carousel />
      <Facts />
      <Features />
      <Testimonials />
      <PopularProjects /> {/* Add the Popular Projects section */}
    </div>
  );
}

export default Home;
