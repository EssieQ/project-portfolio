import React from "react";
import styled from "styled-components";
import PText from "./PText";

const AboutInfoItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 26rem;
  }
  .item {
    background-color: var(--light-2);
    padding: 1rem;
    border-radius: 8px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = "this is the title",
  items = ["HTML", "CSS", "JS"],
}) {
  return (
    <AboutInfoItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutInfoItemStyles>
  );
}
