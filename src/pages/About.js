import React from "react";
import EstherCV from "../assets/data/resume-esther-cauven.pdf";

import PText from "../components/PText";
import AboutImg from "../assets/images/about-img.png";
import styled from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 2;
  }
  .right {
    flex: 3;
  }
  .about-subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    color: var(--terracotta);
    span {
      background-color: var(--light-2);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about-heading {
    font-size: 2.6rem;
    margin-bottom: 2rem;
    color: var(--terracotta);
  }
  .about-info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
      margin-left: -10rem;
    }
  }
  .left {
    img {
      border: 2px solid var(--terracotta);
      padding: 20px;
      max-width: 400px;
    }
  }

  .about-info-items {
    margin-top: 15rem;
  }
  .about-info-item {
    margin-bottom: 10rem;
  }
  .about-info-heading {
    font-size: 3.6rem;
    margin-bottom: 4rem;
    text-transform: uppercase;
  }
  .download {
    margin-top: 2rem;
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "var(--terracotta)" : "var(--light-2)"};
    padding: 0.7em 2em;
    margin-top: 20px;
    border-radius: 12px;
    display: inline-block;
    border: 1px solid var(--terracotta);
    color: ${(props) => (props.outline ? "var(--light)" : "var(--terracotta)")};
    &:hover {
      border: var(--coffee);
      color: var(--coffee);
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about-subheading {
      font-size: 1.8rem;
    }
    .about-heading {
      font-size: 2.8rem;
    }
    .right {
      text-align: center;
      .para {
        margin-left: 0rem;
      }
    }
    .about-info-heading {
      font-size: 3rem;
    }
    .download {
      font-size: 1.8rem;
      margin-top: -1rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <img src={AboutImg} alt="Esther Cauven" rel="norefferer" />
          </div>
          <div className="right">
            <p className="about-subheading">
              Hi, I am <span>Esther Cauven</span>
            </p>
            <h2 className="about-heading">A front-end developer</h2>
            <div className="about-info">
              <PText>
                I have spent the last 3 years in Australia, and before that I
                lived in India, China, and Spain.
                <br />
                <br />
                I have always had a deep interest for learning new languages.
                Only recently have I realised that this also translates well --
                pun intended -- to coding languages!
                <br /> <br />I started my coding adventure with HTML, CSS, and
                JavaScript, and soon realised I wanted to make my way into the
                tech world. Since then, I have also learnt React and Python.
              </PText>
            </div>
            <a
              href={EstherCV}
              download="resume-esther-cauven"
              className="download"
            >
              Download my CV
            </a>
          </div>
        </div>
        <div className="about-info-items">
          <div className="about-info-item">
            <h1 className="about-info-heading">Education</h1>
            <AboutInfoItem
              title="Certifications"
              items={["Front End Development, React Development -- SheCodes"]}
            />
          </div>
          <div className="about-info-item">
            <AboutInfoItem
              title="University"
              items={[
                "Oriental Languages and Communication -- Zuyd University of Applied Sciences, Maastricht, Netherlands",
                "Chinese Language and Culture -- Nankai University, Tianjin, China",
              ]}
            />
          </div>
          <div className="about-info-item">
            <h1 className="about-info-heading">My Skills</h1>
            <AboutInfoItem
              title="Front End"
              items={[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Bootstrap",
                "Styled Components",
                "Python",
                "API integration",
              ]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
