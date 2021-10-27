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
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .section-title {
      text-align: center;
    }
    .about-section-buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper {
        width: 100%;
      }
    }
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
          I am a front-end developer from the Netherlands and have lived in 5
          countries. As a polyglot, I am passionate about learning new languages
          -- and realised learning a new programming language is very similar to
          learning a foreign language. I decided using my creative side and
          knack for learning new languages in web development to combine the two
          things that bring me joy.
        </PText>
        <div className="about-section-buttons">
          <Button btnLink="/projects" btnText="Projects" />
          <Button btnLink="/about" btnText="Read more" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
