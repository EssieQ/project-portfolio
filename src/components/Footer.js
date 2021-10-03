import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyles = styled.div`
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
                title: "+61 401 167 654",
                path: "tel: +61 401 167 654",
              },
              {
                title: "ecauven@gmail.com",
                path: "mailto: ecauven@gmail.com",
              },
              {
                title: "Brisbane, QLD",
                path: "https://www.google.com/maps/place/Brisbane+Queensland/@-27.3798038,152.4327681,9z/data=!3m1!4b1!4m5!3m4!1s0x6b91579aac93d233:0x402a35af3deaf40!8m2!3d-27.4704528!4d153.0260341",
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
                path: "https://github.com/EssieQ",
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
