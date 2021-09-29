import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";
import SectionTitle from "./SectionTitle";

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
  }
  .section-title {
    text-align: left;
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <SectionTitle
          className="section-title"
          subheading="Let me introduce myself"
          heading="About me"
        />
        <PText>
          I am a junior front-end developer from the Netherlands. I like using
          my creative side to create professional websites{" "}
        </PText>
        <div className="about-section-buttons">
          <Button btnLink="/projects" btnText="Projects" />
          <Button btnLink="/about" btnText="Read more" outline />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
