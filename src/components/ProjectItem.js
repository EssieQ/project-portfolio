import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import VanillaJSWeather from "../assets/images/vanilla-js-weather.png";

const ProjectItemStyle = styled.div`
  .projectItem-img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--terracotta);
    padding: 20px;
    img {
      height: 100%;
    }
  }
  .projectItem-info {
    margin-top: 1rem;
    background-color: var(--light-2);
    padding: 1rem;
    border-radius: 8px;
  }
  .projectItem-title {
    font-size: 2.2rem;
    color: var(--terracotta);
  }
  .projectItem-description {
    font-size: 1.6rem;
    font-family: "RobotoMono Regular";
    color: var(--terracotta);
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    height: 350px;
  }
`;

export default function ProjectItem({
  img = VanillaJSWeather,
  title = "Project title",
  desc = "Amazing",
}) {
  return (
    <ProjectItemStyle>
      <Link
        to="https://nostalgic-raman-1a34c8.netlify.app/"
        className="projectItem-img"
      >
        <img src={img} alt="Vanilla JS Weather app" />
      </Link>
      <div className="projectItem-info">
        <Link to="#">
          <h3 className="projectItem-title">{title}</h3>
        </Link>
        <p className="projectItem-description">{desc}</p>
      </div>
    </ProjectItemStyle>
  );
}
