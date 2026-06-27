import React from 'react';
import './Hero.css';
import Nitesh from '../../assets/nitesh.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-glow"></div>
      <img src={Nitesh} alt="Nitesh Chaurasiya" />
      <p className="hero-kicker">Frontend Developer & Web Designer</p>
      <h1>
        <span>I'm Nitesh Chaurasiya,</span> building responsive web experiences.
      </h1>
      <p>
        I create clean, modern, and mobile-friendly websites using HTML, CSS,
        JavaScript, and React.
      </p>
      <div className="hero-action">
        <a className="hero-connect" href="#Contect">Connect With Me</a>
        <a className="hero-resume" href="#Project">View Projects</a>
      </div>
    </div>
  );
};

export default Hero;
