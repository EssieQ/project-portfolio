import React from "react";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";
import PText from "./PText";

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--light-2);
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  .icon {
    color: var(--brown);
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--light);
  }
  svg {
    width: 3.5rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = "this is info",
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}
