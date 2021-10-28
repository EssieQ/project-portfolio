import React from "react";
import HeroImage from "../assets/images/HeroImage.png";
import PText from "./PText";
import Button from "./Button";
import ReactRotatingText from "react-rotating-text";
import styled from "styled-components";

const HeroStyles = styled.div`
  .personal {
    margin-top: 100px;
  }

  .float-container {
    padding: 20px;
  }

  .float-child {
    width: 50%;
    float: left;
    padding: 20px;
  }
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    color: var(--coffee);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 30px;
  }
  .hero-heading {
    font-size: 2rem;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero-name {
      font-size: 7rem;
      font-family: "Montserrat Semibold";
      color: var(--terracotta);
    }
  }
  .hero-img {
    max-width: 700px;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--terracotta);
    border-radius: 8px;
  }
  .hero-info {
    margin-top: 20px;
    p {
      font-size: 3rem;
    }
  }

  .hero-social {
    p {
      font-size: 1.3rem;
      padding: 20px;
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    a {
      color: var(--terracotta);
      &:hover {
        color: var(--coffee);
      }
    }
    .react-rotating-text-cursor {
      animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s
        infinite;
    }

    @keyframes blinking-cursor {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .float-child {
      width: 100%;
      float: center;
      padding: 20px;
    }
    .hero {
      min-height: 750px;
    }
    .hero-heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero-name {
        font-size: 4.5rem;
      }
    }
    .hero-img {
      height: 450px;
    }
    .hero-info {
      margin-top: 3rem;
      p {
        margin-top: 4rem;
        line-height: 40px;
        font-size: 2.5rem;
      }
    }
    .button {
      margin-top: 2rem;
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container float-container">
          <div className="float-child personal">
            <h1 className="hero-heading">
              <span>Hello, my name is</span>
              <span className="hero-name">Esther Cauven</span>
            </h1>

            <div className="hero-info">
              <PText>
                <p>
                  <ReactRotatingText
                    items={[
                      "Front-end Developer",
                      "Polyglot",
                      "Cozy knitter",
                      "Avid reader",
                      "Cheese lover",
                    ]}
                  />
                </p>
              </PText>
              <span className="button">
                <Button btnLink="/projects" btnText="click to see my work" />
              </span>
            </div>

            <div className="hero-social">
              <p>
                Connect with me on
                <a
                  href="https://www.linkedin.com/in/esthercauven/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
          <div className="hero-img float-child">
            <img src={HeroImage} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
