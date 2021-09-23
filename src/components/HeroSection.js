import React from "react";
import HeroImage from "../assets/images/HeroImage.png";
import PText from "./PText";

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
        <PText />
      </div>
    </div>
  );
}
