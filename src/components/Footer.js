import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Tagline>
          "That’s a Wrap on the Portfolio – Let’s Create the Future! 🌟
        </Tagline>
        <Copyright>
          &copy; {new Date().getFullYear()} Vyshnavi Kurella. All rights
          reserved.
        </Copyright>
        <Attributes>
          <p>Resources used in this project:</p>
          <LinksContainer>
            <a
              href="https://www.flaticon.com/free-icons/girl"
              title="girl icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              "Girl Icon" by Freepik - Flaticon
            </a>
            <a
              href="https://www.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_14723886.htm#fromView=keyword&page=7&position=28&uuid=18bd45a8-882f-4593-b791-cb43718582a8"
              target="_blank"
              rel="noopener noreferrer"
            >
              "Programmer Working Illustration" by Freepik
            </a>
            <a
              href="https://www.flaticon.com/free-icons/hiking"
              title="hiking icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              "Hiking Icon" by Freepik - Flaticon
            </a>
          </LinksContainer>
        </Attributes>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: ${({ theme }) =>
    theme.colors.primary}; /* Muted Sage Green */
  color: ${({ theme }) => theme.colors.text}; /* Dark Charcoal */
  padding: 2rem 1rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.accent}; /* Subtle border */
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Tagline = styled.p`
  font-size: 1.2rem; /* Slightly larger font for tagline emphasis */
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text}; /* Dark Charcoal */
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondaryText}; /* Slate Grey */
`;
const Attributes = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondaryText}; /* Slate Grey */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  a {
    font-size: 0.9rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondaryText};
    transition: color 0.2s ease;
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
