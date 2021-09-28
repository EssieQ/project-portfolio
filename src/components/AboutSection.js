import React from "react";
import Button from "./Button";
import PText from "./PText";
import SectionTitle from "./SectionTitle";

export default function AboutSection() {
  return (
    <div className="container">
      <SectionTitle subheading="Let me introduce myself" heading="About me" />
      <PText>
        I am a junior front-end developer from the Netherlands. I like using my
        creative side to create professional websites{" "}
      </PText>
      <div className="about-section-buttons">
        <Button btnLink="/projects" btnText="Projects" />
        <Button btnLink="/about" btnText="Read more" outline />
      </div>
    </div>
  );
}
