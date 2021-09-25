import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "var(--terracotta)" : "var(--light)"};
    padding: 0.7em 2em;
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
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnLink = "test",
  btnText = "test",
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline}>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
