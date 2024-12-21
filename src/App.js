import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About'

const Home = () => (
  <div className="hero-section">
    <div className='hero-text'>
    <h1>Track Your Fitness Journey</h1>
    <p>
      Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts,
      count reps, and track calories burned. Stay motivated and achieve your goals with ease.
    </p>  
    </div>
  </div>
);


const Services = () => (
  <div className="content">
    <h2>Our Services</h2>
    <p>Explore the wide range of fitness tracking and support services we offer.</p>
  </div>
);

const Benefits = () => (
  <div className="content">
    <h2>Benefits</h2>
    <p>Discover the benefits of using GymFluencer to enhance your fitness journey.</p>
  </div>
);

const Blogs = () => (
  <div className="content">
    <h2>Blogs</h2>
    <p>Read our latest articles and tips on fitness and wellness.</p>
  </div>
);

const Contact = () => (
  <div className="content">
    <h2>Contact Us</h2>
    <p>Get in touch with our team for any inquiries or support.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <div className="logo">Gym</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/benefits">Benefits</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <button className="join-button">Join us now</button>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
