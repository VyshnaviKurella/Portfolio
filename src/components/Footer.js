import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Tagline>"That’s a Wrap on the Portfolio – Let’s Create the Future! 🌟</Tagline>
        <Copyright>
          &copy; {new Date().getFullYear()} Vyshnavi Kurella. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary}; /* Muted Sage Green */
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
