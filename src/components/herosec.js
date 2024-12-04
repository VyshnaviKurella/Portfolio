import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AboutSection from './AboutSection';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = "Hi, I'm Vyshnavi!"; // Text for typewriter effect
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => setShowAbout(!showAbout);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < textToType.length) {
        setTypedText((prev) => prev + textToType[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HeroContainer>
        <ProfessionalSection>
          <HeroText>
            <h1>{typedText}</h1>
            <p>Frontend Developer | Problem Solver</p>
          </HeroText>
          <Button onClick={toggleAbout}>About Me</Button>
        </ProfessionalSection>
        <AboutSection isVisible={showAbout} />
      </HeroContainer>
      
    </>
  );
};

export default HeroSection;

// Styled Components

const HeroContainer = styled.div`
  // position: relative; /* Make HeroContainer the reference for absolute positioning */
 
`;

const ProfessionalSection = styled.div`
  
  display: flex;
  flex-direction:column;
  flex:1;
   position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  height: 100vh;
  overflow: hidden;
  z-index:1500;
  background: linear-gradient(
    190deg,
    #a1c6ea,
    #d6f5e3,
    #ffd1dc,
    #fae3d9
  );
`;

const Button = styled.button`
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.secondaryText};
  }
`;

/* Animations */
const animations = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

const GlobalStyle = createGlobalStyle`
  ${animations}
`;

export { GlobalStyle };
