import React from "react";
import HeroImage from "../assets/images/HeroImage.png";
import PText from "./PText";
import Button from "./Button";
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";

export default function HeroSection() {
  return (
    <div className="container">
      <h1 className="hero-heading">
        <span>Hello, this is</span>
        <span>Esther Cauven</span>
      </h1>
      <div className="hero-img">
        <img src={HeroImage} alt="" />
      </div>
      <div className="hero-info">
        <PText>Front-End Developer, Polyglot, Cozy knitter, Avid reader</PText>
        <Button btnLink="/projects" btnText="see my works" />
      </div>
      <div className="hero-social">
        <div className="hero-social-indicator">
          <p>Follow</p>
          <img src={SocialMediaArrow} alt="social media arrow" />
        </div>
        <div className="hero-social-text">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/esthercauven/"
                target="_blank"
                rel="noreferrer"
              >
                LI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
