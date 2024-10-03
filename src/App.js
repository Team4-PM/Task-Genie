import './App.css';
import Footer from './Footer';  // Your footer component
import './App.css';  // Add a reference for your styles

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Trusted Service Providers Instantly!</h1>
          <p>Connecting you with professionals for all your tasks, quickly and easily.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <img src="plumbing.jpg" alt="Plumbing" />
            <h3>Plumbing</h3>
            <p>Quick and reliable plumbing services at your doorstep.</p>
          </div>
          <div className="service-item">
            <img src="cleaning.jpg" alt="Cleaning" />
            <h3>Cleaning</h3>
            <p>Professional cleaners for your home or office.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-carousel">
          <div className="testimonial-item">
            <p>"Task Genie made finding a reliable cleaner so easy!"</p>
            <h4>- Sarah M.</h4>
          </div>
          <div className="testimonial-item">
            <p>"I found an electrician in no time and they were great!"</p>
            <h4>- John D.</h4>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Choose Your Service</h3>
            <p>Select from a variety of trusted professionals.</p>
          </div>
          <div className="step">
            <h3>2. Book Instantly</h3>
            <p>Find a service provider at a time that suits you.</p>
          </div>
          <div className="step">
            <h3>3. Get the Job Done</h3>
            <p>Professionals complete the task quickly and efficiently.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
