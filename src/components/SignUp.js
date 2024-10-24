import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Auth.css'; 
import Navbar from './Navbar'; // Import the Navbar
import Footer from './Footer';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle sign up (e.g., API call)
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      console.log('Name:', name, 'Email:', email, 'Password:', password);
    }
  };

  return (
    <div className='signin'>
                 <Navbar /> {/* Navbar at the top */}
                 <br></br><br></br><br></br><br></br>
    <div className="auth-container">

      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn">Sign Up</button>

        <div className="auth-links">
          <Link to="/signin">Already have an account? Sign In</Link>
        </div>
      </form>
    </div>      <br></br><br></br>

    <Footer />
    </div>
  );
};

export default SignUp;
