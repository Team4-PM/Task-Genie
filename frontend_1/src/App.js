import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PopularProjects from './components/PopularProjects';
import ProjectDetail from './components/ProjectDetail'; 
import AllProjects from './components/AllProjects'; // Import the AllProjects component
import PopularServices from './components/PopularServices';
import SignIn from './components/SignIn'; 
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop
import AllServices from './components/AllServices';
import ServiceDetails from './components/ServiceDetails';
import './App.css';

function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<PopularProjects />} />
          <Route path="/projectsall" element={<AllProjects />} /> {/* Add this line */}
          <Route path="/projects/:projectId" element={<ProjectDetail />} /> 
          <Route path="/popularservices" element={<PopularServices />} />
          <Route path="/servicesall" element={<AllServices />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/signin" element={<SignIn />} /> {/* Add SignIn Route */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/footer" element={<Footer />} /> 

        </Routes>
      </div>
    </Router>
  );
}

export default App;
