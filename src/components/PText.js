import React from "react";
import styled from "styled-components";

const PStyle = styled.div`
  color: var(--coffee);
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle>
      <p className="para">{children}</p>
    </PStyle>
  );
}
