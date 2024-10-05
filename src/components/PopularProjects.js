import React from 'react';
import './PopularProjects.css';

const projectsData = [
  {
    title: "Furniture Assembly",
    price: "$49",
    image: "./Assets/furniture-assembly.jpg"  
  },
  {
    title: "Mount Art or Shelves",
    price: "$65",
    image: "./Assets/mount-art.jpg"
  },
  {
    title: "Mount a TV",
    price: "$69",
    image: "./Assets/mount-tv.jpg"
  },
  {
    title: "Help Moving",
    price: "$67",
    image: "./Assets/help-moving.jpg"
  },
  {
    title: "Home & Apartment Cleaning",
    price: "$49",
    image: "./Assets/cleaning.jpg"
  },
  {
    title: "Minor Plumbing Repairs",
    price: "$74",
    image: "./Assets/plumbing.jpg"
  },
  {
    title: "Electrical Help",
    price: "$69",
    image: "./Assets/electrical.jpg"
  },
  {
    title: "Heavy Lifting",
    price: "$61",
    image: "./Assets/heavy-lifting.jpg"
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
