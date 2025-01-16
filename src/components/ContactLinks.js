import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactLinks = () => {
  return (
    <ContactContainer>
      <h1>"Ready to Hustle – Let’s Talk Opportunities!"</h1>
      <Links>
        <a href="mailto:vyshnavk@uci.edu">
          <FaEnvelope size={30} /> Email Me
        </a>
        <a href="https://linkedin.com/in/vyshnavi-kurella" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} /> LinkedIn
        </a>
        <a href="https://github.com/VyshnaviKurella" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} /> GitHub
        </a>
      </Links>
    </ContactContainer>
  );
};

export default ContactLinks;

const ContactContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.backgrounds.background1};

  h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    h1 {
      font-size: 1.8rem;
    }
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    a {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    gap: 0.8rem;

    a {
      font-size: 1rem;
    }
  }
`;
