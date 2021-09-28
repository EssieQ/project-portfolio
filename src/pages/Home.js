import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <div className="Home">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
