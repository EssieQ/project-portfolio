import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyles = styled.div`
  background-color: var(--light);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer-col1 {
    flex: 2;
  }
  .footer-col2,
  .footer-col3,
  .footer-col4 {
    flex: 1;
  }
  .footer-col1-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--terracotta);
  }
  .copyright {
    padding: 1rem;
    margin-top: 5rem;
    a {
      color: var(--terracotta);
      &:hover {
        color: var(--coffee);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer-col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer-col1">
          <h1 className="footer-col1-title">Esther Cauven</h1>
          <PText>Communication expert turned front-end developer. </PText>
        </div>
        <div className="footer-col2">
          <FooterCol
            heading="Important links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                title: "About",
                path: "/about",
                type: "Link",
              },
              {
                title: "Projects",
                path: "/projects",
                type: "Link",
              },
              {
                title: "Contact",
                path: "/contact",
                type: "Link",
              },
            ]}
          />
        </div>
        <div className="footer-col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+31 658 847 058",
                path: "tel: +31 658 847 058",
              },
              {
                title: "ecauven@gmail.com",
                path: "mailto: ecauven@gmail.com",
              },
              {
                title: "Amsterdam, NL",
                path: "https://www.google.com/maps/place/Amsterdam/@52.3547925,4.7638758,11z/data=!3m1!4b1!4m5!3m4!1s0x47c63fb5949a7755:0x6600fd4cb7c0af8d!8m2!3d52.3675734!4d4.9041389",
              },
            ]}
          />
        </div>
        <div className="footer-col4">
          <FooterCol
            heading="Socials"
            links={[
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/esthercauven/",
              },
              {
                title: "Github",
                path: "https://github.com/esthercauven",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 Esther Cauven |{" "}
            <a
              href="https://github.com/EssieQ/project-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced
            </a>{" "}
            on GitHub
          </PText>
        </div>
      </div>
    </FooterStyles>
  );
}
