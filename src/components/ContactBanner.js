import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  .contactBanner-wrapper {
    background-color: var(--light-2);
    border-radius: 8px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner-heading {
    font-size: 4rem;
    color: var(--terracotta);
  }
  @media only screen and (max-width: 768px) {
    .contactBanner-heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner-wrapper">
          <PText>Have a project in mind?</PText>
          <h3 className="contactBanner-heading">Let me help you</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
