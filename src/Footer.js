import React from 'react';
import './Footer.css';  // Optional for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>&copy; 2024 Task Genie. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
