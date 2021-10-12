import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import { MdSearch } from "react-icons/md";
import ProjectItem from "../components/ProjectItem";
import ProjectInfo from "../assets/data/projects";

const ProjectsStyles = styled.div`
  padding: 10rem 0;
  .projects-allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
  }
  .projects-searchbar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects-searchbar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--brown);
    border-radius: 6px;
    outline: none;
    border-color: var(--brown);
  }
  .projects-searchbar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
    & {
      color: var(--brown);
    }
  }
  @media only screen and (max-width: 768px) {
    .projects-searchbar,
    .projects-searchbar form,
    .projects-searchbar input {
      width: 100%;
    }
    .projects-allItems {
      gap: 20rem;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState("");
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText === "") return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  function handleChange(event) {
    event.preventDefault();
    setSearchText(event.target.value);
    if (!event.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  }

  return (
    <ProjectsStyles>
      <div class="container">
        <SectionTitle heading="Projects" subheading="Some of my recent works" />
        <div className="projects-searchbar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Project Name"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects-allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </ProjectsStyles>
  );
}
