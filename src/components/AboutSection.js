import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = ({ isVisible, onClose }) => {
  return (
    <AboutContainer
    initial={{ y: -100, opacity: 0 }} // Starts off-screen
    animate={isVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }} // Slides into view
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <CurvedBackground>
        <Content>
          
          <h2>About Me</h2>
          <p>
            I am a Frontend Developer passionate about building user-friendly interfaces and solving challenging problems. 
            Outside of work, I love trekking, exploring mountains, enjoying beaches, and spending cozy weekends with movie marathons.
          </p>
          <Gallery>
            <img src="event1.jpg" alt="Event 1" />
            <img src="event2.jpg" alt="Event 2" />
            <img src="event3.jpg" alt="Event 3" />
          </Gallery>
          <CloseButton onClick={onClose}> ^ </CloseButton>
        </Content>
        
      </CurvedBackground>
    </AboutContainer>
  );
};

export default AboutSection;

// Styled Components

const AboutContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  position: absolute;
  top: 102%;  /* Start off-screen from below */
  left: 0;
  width: 100%;
`;

const CurvedBackground = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  padding: 3rem 2rem;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.secondaryText};
    line-height: 1.6;
  }
`;

const Gallery = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const CloseButton = styled.button`
  
  background: transparent;
  text-align:center;
  border: none;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  margin:2px;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
