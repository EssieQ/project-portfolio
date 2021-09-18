import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationMenuStyle = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem auto;
  background: var(--light);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3 ease background-color;
    }
    a {
      display: inline-block;
      font-family: "RobotoMono Regular";
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--brown);
      outline: none;
      &:hover {
        color: var(--coffee);
      }
    }
    .active {
      color: var(--coffee);
    }
  }
`;

export default function NavigationMenu() {
  return (
    <NavigationMenuStyle>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </NavigationMenuStyle>
  );
}
