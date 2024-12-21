import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className="container">
            <div className="header-text">YOUR FITNESS.<br/>OUR MISSION.</div>
            <div className="sub-text">
                At GymFluencer, our mission is simple: to provide the tools and support you need to reach your fitness goals. We combine innovative technology with personalized guidance to make fitness easier, more accessible, and more motivating. Join us as we help you transform your fitness journey, one workout at a time.
            </div>
            <div className="row stats">
                <div className="col-md-4 stat-item">
                    <div className="stat-number">463k+</div>
                    <div className="stat-description">Workouts logged and progress tracked every</div>
                </div>
                <div className="col-md-4 stat-item">
                    <div className="stat-number">163k+</div>
                    <div className="stat-description">Fitness enthusiasts connected through our</div>
                </div>
                <div className="col-md-4 stat-item">
                    <div className="stat-number">13+</div>
                    <div className="stat-description">Countries where GymFluencer is making an impact</div>
                </div>
            </div>
        </div>
    )
}

export default About
