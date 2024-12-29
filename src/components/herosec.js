import React, { useState } from 'react';
import styled from 'styled-components';
import AboutSection from '../pages/AboutPage';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // const [typedText, setTypedText] = useState('');
  const textToType = "Vyshnavi Kurella"; // Text for typewriter effect
  // const [showAbout, setShowAbout] = useState(false);

  // const toggleAbout = () => setShowAbout(!showAbout);
  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  
  return (
      <HeroContainer>
  
        <ProfessionalSection>
          <HeroText>
          <h1>
  {textToType.split('').map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      {char}
    </motion.span>
  ))}
</h1>

<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2, duration: 1 }}
>
<div>Turning Ideas into Code, One Project at a Time</div>

<div> Developer, ML enthusiast, and a problem solver at heart. I thrive on creating sleek, impactful solutions that transform ideas into reality. Known for my adaptability and dedication, I navigate both mountain trails and codebases with the same determination. When I’m not coding, I’m either conquering peaks or enjoying a well-earned movie marathon.  </div>
</motion.p>
          </HeroText>
          <Button >
          <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
            About Me
          </Link>
          </Button>
        </ProfessionalSection>
       
        {/* <AboutSection isVisible={showAbout} /> */}
      </HeroContainer>
      
  );
};

export default HeroSection;

// Styled Components

const HeroContainer = styled.div`
      background: linear-gradient(
    190deg,
    #a1c6ea,
    #d6f5e3,
    #ffd1dc,
    #fae3d9
  );
 
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
  height:100vh;
  // margin:4rem;
  overflow: hidden;
  // z-index:1500;

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
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
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
// const animations = `
// @keyframes fadeInUp {
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }
// `;

// const GlobalStyle = createGlobalStyle`
//   ${animations}
// `;

// export { GlobalStyle };
