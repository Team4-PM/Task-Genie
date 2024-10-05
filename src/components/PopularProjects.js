import React from 'react';
import './PopularProjects.css';

// Import the images
import furnitureAssembly from './Assets/furniture-assembly.jpg';
import mountArt from './Assets/mount-art.jpg';
import mountTv from './Assets/mount-tv.jpg';
import helpMoving from './Assets/help-moving.jpg';
import cleaning from './Assets/cleaning.jpg';
import plumbing from './Assets/plumbing.jpg';
import electrical from './Assets/electrical.jpg';
import heavyLifting from './Assets/heavy-lifting.jpg';

const projectsData = [
  {
    title: "Furniture Assembly",
    price: "$49",
    image: furnitureAssembly  // Use the imported image
  },
  {
    title: "Mount Art or Shelves",
    price: "$65",
    image: mountArt
  },
  {
    title: "Mount a TV",
    price: "$69",
    image: mountTv
  },
  {
    title: "Help Moving",
    price: "$67",
    image: helpMoving
  },
  {
    title: "Home & Apartment Cleaning",
    price: "$49",
    image: cleaning
  },
  {
    title: "Minor Plumbing Repairs",
    price: "$74",
    image: plumbing
  },
  {
    title: "Electrical Help",
    price: "$69",
    image: electrical
  },
  {
    title: "Heavy Lifting",
    price: "$61",
    image: heavyLifting
  }
];

const PopularProjects = () => {
  return (
    <div className="projects-section">
      <h2>Popular Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>Projects starting at {project.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProjects;
