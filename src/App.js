import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Benefits from './components/Benefits';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Workout from './components/Workout';
import Diet from './components/Diet';
import JoinUs from './components/JoinUs';

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

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <div className="logo">Gym</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li className='nav-item dropdown'>
            <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Services
          </Link>
              
              <ul className="dropdown-menu">
                <li><Link to="/workoutplans" className='dropdown-item'>Workout Plan</Link></li>
                <li><Link to="/dietplans"  className='dropdown-item'>Diet Plan</Link></li>
              </ul>
            </li>
            <li><Link to="/benefits">Benefits</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/join-us"><button className="join-button">Join us now</button></Link></li>
          </ul>
          
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/workoutplans" element={<Workout />} />
          <Route path="/dietplans" element={<Diet />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
