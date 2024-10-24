import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Auth.css'; 
import Navbar from './Navbar'; // Import the Navbar
import Footer from './Footer';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle sign in (e.g., API call)
    console.log('Email:', email, 'Password:', password, 'Remember Me:', rememberMe);
  };

  return (
    <div className='signin'>
        <Navbar /> {/* Navbar at the top */}
        <br></br><br></br><br></br><br></br>
    <div className="auth-container">
          
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
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

        <div className="remember-me">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label>Remember Me</label>
        </div>

        <button type="submit" className="btn">Sign In</button>

        <div className="auth-links">
          <Link to="/signup">Don't have an account? Sign Up</Link>
        </div>
      </form>
    </div>      <br></br><br></br>

    <Footer />

    </div>
  );
};

export default SignIn;
