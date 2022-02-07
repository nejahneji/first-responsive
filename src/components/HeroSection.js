import React from "react";
import "../App.css"

import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className="hero-container" id="home">
      <video src="/video.mp4" autoPlay loop muted />
      <h1>GT pièces autos</h1>
      <p>Qu'est-ce que tu attends ?</p>
    </div>
  );
};

export default HeroSection;
