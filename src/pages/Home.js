import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";

export default function Home() {
  return (
    <div className="Home">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </div>
  );
}
