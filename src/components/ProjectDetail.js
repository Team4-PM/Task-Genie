import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Import the Navbar
import Footer from './Footer';
import Modal from 'react-modal';
import emailjs from 'emailjs-com'; // Import EmailJS
import { useParams } from 'react-router-dom';
import '../css/ProjectDetails.css';
import sp1 from '../Assets/sp1.webp';
import sp2 from '../Assets/sp2.jpg';

import hiw1 from '../Assets/hiw1.jpg';
import hiw2 from '../Assets/hiw2.jpg';
import hiw3 from '../Assets/hiw3.jpg';
import p1 from "../Assets/furniture_assembly.webp";
import p2 from "../Assets/mount_tv.webp";
import p3 from "../Assets/help_moving.jpg";
import p4 from "../Assets/house-cleaning.jpg";
import p5 from "../Assets/plumber-working.jpg";
import p6 from "../Assets/Electrical-Repairs.jpg";
import p7 from "../Assets/gardening.jpg";
import p8 from "../Assets/carpenter_services.jpg";
import p9 from "../Assets/window_installation.png";
import p10 from "../Assets/appliance_repair.jpg";
import p11 from "../Assets/roofing_services.webp";
import p12 from "../Assets/pest_control.webp";
import p13 from "../Assets/landscaping.webp";
import p14 from "../Assets/pressure_washing.jpeg";
import p15 from "../Assets/siding_repair.jpeg";
// Set up modal root for accessibility
Modal.setAppElement('#root');

const ProjectDetails = () => {
  const { projectId } = useParams();
  const projectData = {
    "1": {
      title: "Furniture Assembly",
      price: "$49",
      description: "Our experts will assemble your furniture with precision, ensuring each piece is put together securely and according to the manufacturer's guidelines. Whether it's flat-pack furniture or custom pieces, we handle it all efficiently.",
      image: p1, // Path to background image

    },
    "2": {
      title: "Mount a TV",
      price: "$69",
      description: "We securely mount your TV on any wall type, ensuring proper alignment and safety. Our team also handles cable management and setup for optimal viewing experience, no matter the room size or TV model.",
      image: p2, 
    },
    "3": {
      title: "Help Moving",
      price: "$67",
      description: "Need help moving heavy furniture or boxes? We provide skilled movers to assist with packing, lifting, and safely transporting your items. Our service is ideal for both short-distance and local moves."
      ,image: p3, 
    },
    "4": {
      title: "House Cleaning",
      price: "$59",
      description: "Our house cleaning service covers every nook and cranny, from dusting to vacuuming and deep-cleaning bathrooms and kitchens. We use eco-friendly products and ensure your home is spotless and comfortable."
      ,image: p4, 

    },
    "5": {
      title: "Plumbing Repairs",
      price: "$75",
      description: "From fixing leaks to installing new fixtures, our licensed plumbers handle all types of repairs. Whether it's a leaky faucet or a broken pipe, we ensure the job is done correctly and efficiently."
      ,image: p5, 
    },
    "6": {
      title: "Electrical Repairs",
      price: "$80",
      description: "Our certified electricians diagnose and repair any electrical issue, from faulty wiring to circuit breaker problems. We also provide installation of new outlets, lighting, and electrical fixtures."
      ,image: p6, 
    },
    "7": {
      title: "Gardening Services",
      price: "$40",
      description: "Our gardening service covers lawn care, planting, trimming, and seasonal clean-up. We ensure your garden thrives by using the best tools and techniques, providing everything from soil care to plant health monitoring."
      ,image: p7, 
    },
    "8": {
      title: "Carpentry Work",
      price: "$55",
      description: "Our carpenters are skilled in crafting custom furniture, installing cabinetry, and making home repairs. Whether it’s a new bookshelf or repairing damaged woodwork, we deliver high-quality, long-lasting results."
      ,image: p8, 
  },
    "9": {
      title: "Window Installation",
      price: "$150",
      description: "We install windows of all sizes, ensuring a perfect fit and energy efficiency. Our service includes removal of old windows, precise installation, and thorough sealing to improve insulation and appearance."
      ,image: p9, 
    },
    "10": {
      title: "Appliance Repair",
      price: "$100",
      description: "Our technicians repair all major appliances, including refrigerators, washers, dryers, and ovens. We diagnose the issue quickly and offer solutions to extend the lifespan of your appliance, saving you from costly replacements."
      ,image: p10, 
    },
    "11": {
      title: "Roofing Services",
      price: "$250",
      description: "Our roofing experts handle repairs, replacements, and maintenance for both residential and commercial properties. We use high-quality materials and ensure that your roof is weatherproof and durable."
      ,image: p11, 
    },
    "12": {
      title: "Pest Control",
      price: "$90",
      description: "We offer eco-friendly pest control services to eliminate unwanted pests from your home or office. Our methods are safe, effective, and tailored to address common pests such as insects, rodents, and termites."
      ,image: p12, 
    },
    "13": {
      title: "Landscaping",
      price: "$60",
      description: "Our landscaping team designs and maintains beautiful outdoor spaces, offering services like mowing, planting, and landscape design. We create tailored solutions to suit your yard's size, soil, and climate."
      ,image: p13, 
    },
    "14": {
      title: "Pressure Washing",
      price: "$70",
      description: "We provide professional pressure washing services for driveways, patios, and house exteriors. Our powerful cleaning equipment removes dirt, grime, and mold, leaving surfaces looking brand new."
      ,image: p14, 
    },
    "15": {
      title: "Siding Repair",
      price: "$120",
      description: "Our siding repair service restores the exterior of your home, fixing damage from weather, pests, and wear and tear. We match materials and colors to ensure seamless repairs that enhance your home's appearance."
      ,image: p15, 
    }
  };
  
  const project = projectData[projectId];

  const [step, setStep] = useState(0);  // Initially, step is 0 (shows "Book Now")
  const [taskDetails, setTaskDetails] = useState({
    name: '',
    location: '',
    taskSize: 'small',
    serviceProvider: null,
    date: '',
    time: '',
  });

  const [serviceProviders] = useState([
    { name: 'John Doe', experience: '5 years', reviews: '4.5/5', image: sp1 },
    { name: 'Jane Smith', experience: '3 years', reviews: '4.8/5', image: sp2 },
    // Add more providers
  ]);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  const handleProviderSelect = (provider) => {
    setTaskDetails({ ...taskDetails, serviceProvider: provider });
    nextStep();
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [step]);

  return (
    <div className="project-details-container">
      <Navbar />
      <div className="project-details-content-wrapper" style={{ backgroundImage: `url(${project.image})` }}>
      <div className="project-details-overlay"></div> {/* Blur and darken background */}
  <div className="project-details-content">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <p>Price: {project.price}</p>
        </div>
      </div>
      {/* How It Works Section */}
    <div className="how-it-works">
      <h2>How it works</h2>
      <div className="steps-container">
        <div className="step">
          <img src={hiw1} alt="Describe your task" />
          <h3>1. Describe Your Task</h3>
          <p>Tell us what you need done, when, and where it works for you.</p>
        </div>
        <div className="step">
          <img src={hiw2} alt="Choose your tasker"/>
          <h3>2. Choose Your Tasker</h3>
          <p>Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.</p>
        </div>
        <div className="step">
          <img src={hiw3} alt="Get it done"/>
          <h3>3. Get It Done!</h3>
          <p>Your Tasker arrives and gets the job done. Pay securely and leave a review, all through Task Genie.</p>
        </div>
      </div>
    </div>
      <div className="booking-container">
        {step === 0 ? (
          <button className="book-now-btn" onClick={() => setStep(1)}>Book Now</button>
        ) : (
          <div className="booking-steps">
            {/* <div className="step-indicator">
        <div className={step >= 1 ? 'completed' : ''}>Step 1</div>
        <div className={step >= 2 ? 'completed' : ''}>Step 2</div>
        <div className={step >= 3 ? 'completed' : ''}>Step 3</div>
        <div className={step >= 4 ? 'completed' : ''}>Step 4</div>
      </div> */}
            {step === 1 && (
              <div className="steps step-1">
                <h2>Step 1: Describe Your Task</h2>
                <label>
                  Full Name:
                  <input type="text" name="name" value={taskDetails.name} onChange={handleInputChange} required />
                </label><br></br><br></br>
                <label>
                  Location: 
                  <input type="text" name="location" value={taskDetails.location} onChange={handleInputChange} required />
                </label>< br></br><br></br>
                <label>
                  Task Size:
                  <select name="taskSize" value={taskDetails.taskSize} onChange={handleInputChange}>
                    <option value="small">Small (1 hr)</option>
                    <option value="medium">Medium (2 hr)</option>
                    <option value="large">Large (4 hr)</option>
                  </select>
                </label><br></br><br></br>
                 <label>
      Description:
      <textarea name="description" value={taskDetails.description} onChange={handleInputChange} placeholder="Describe your task in detail" required></textarea>
    </label><br /><br /><br></br>
                <button className="next-btn" onClick={nextStep}>Next</button>
              </div>
            )}

            {step === 2 && (
              <div className="steps step-2">
                <h2>Step 2: Select Service Provider</h2>
                <div className="provider-list">
                  {serviceProviders.map((provider, index) => (
                    <div className="provider-card" key={index} onClick={() => handleProviderSelect(provider)}>
                      <img src={provider.image} alt={provider.name} />
                      <h3>{provider.name}</h3>
                      <p>Experience: {provider.experience}</p>
                      <p>Reviews: {provider.reviews}</p>
                    </div>
                  ))}
                </div>
                <button className="prev-btn" onClick={prevStep}>Back</button>
              </div>
            )}

            {step === 3 && (
              <div className="steps step-3">
                <h2>Step 3: Choose Date and Time</h2>
                <label>
                  Date:
                  <input type="date" name="date" value={taskDetails.date} onChange={handleInputChange} required />
                </label><br></br><br></br>
                <label>
                  Time:
                  <input type="time" name="time" value={taskDetails.time} onChange={handleInputChange} required />
                </label><br></br>
                <button className="prev-btn" onClick={prevStep}>Back</button>
                <button className="next-btn" onClick={nextStep}>Next</button>
              </div>
            )}

            {step === 4 && (
              <div className="steps step-4">
                <h2>Step 4: Confirm Booking</h2>
                <p>Confirm booking for: {project.title}</p>
                <p>Service Provider: {taskDetails.serviceProvider?.name}</p>
                <p>Date: {taskDetails.date}</p>
                <p>Time: {taskDetails.time}</p>
                {/* Add payment fields or integrate payment gateway */}
                <button className="prev-btn" onClick={prevStep}>Back</button>
                <button className="confirm-btn">Confirm Booking</button>
              </div>
            )}
          </div>
        )}
      </div><br></br>
      <Footer />
    </div>
  );
};

export default ProjectDetails;