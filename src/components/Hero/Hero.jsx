import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";
import bgVid from '../../img/bg.mp4'

const Hero = () => {
  return (
    <div className="section">
      <div className="hero-container">
       <video src={bgVid} autoPlay muted loop />
        <div className="writter-container">
        <h1 className="hero-text">click.</h1>
        <h1 className="hero-text">
          <Typewriter
          deleteSpeed={10}
          typeSpeed={10}
            words={["Review bug report.", "present live demo.", "collaborate.","get feedback.","teach framer motion."]}
            loop={Infinity}
          />
        </h1>
        <h1 className="hero-text">done.</h1>
        </div>
        <p className="hero-para">
        Stay in the flow with instant dev experiences. No more hours <br /> stashing/pulling/installing locally — just click, and start coding.
        </p>
      </div>
    </div>
  );
};

export default Hero;
