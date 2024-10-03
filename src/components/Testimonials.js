import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: "Elizabeth P.",
    review: "Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes...",
    service: "IKEA Furniture Assembly"
  },
  {
    name: "Tiffany B.",
    review: "David did an awesome job assembling crib and dresser for nursery...",
    service: "Furniture Assembly"
  },
  {
    name: "Amanda L.",
    review: "I hired Joe to patch two holes on my wall and ceiling, he did a fantastic job.",
    service: "Home Repairs"
  },
  {
    name: "Elisa R.",
    review: "Michael did a great job helping us install frameless glass hinged shower doors...",
    service: "General Mounting"
  },
  {
    name: "Sabrina K.",
    review: "Aleksandr was fantastic! He came with all the equipment to do the job perfectly.",
    service: "Electrical Help"
  },
  {
    name: "Jana T.",
    review: "Jose fixed my AC drain line, he was prompt and efficient. Highly recommend!",
    service: "Plumbing"
  }
];


const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>See what happy customers are saying about Task Genie</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.review}</p>
            <a href="#">{testimonial.service}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
