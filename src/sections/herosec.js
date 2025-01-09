import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import working from "../assets/work2.png";

const HeroSection = () => {
  const textToType = "Vyshnavi Kurella"; // Text for typewriter effect

  return (
    <HeroContainer>
      <ProfessionalSection>
        <HeroText>
          <h1>
            {textToType.split("").map((char, index) => (
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
            <Tagline>Turning Ideas into Code, One Project at a Time</Tagline>
            <div>
              Developer, ML enthusiast, and a problem solver at heart. I thrive
              on creating sleek, impactful solutions that transform ideas into
              reality. Known for my adaptability and dedication, I navigate both
              mountain trails and codebases with the same determination. When
              I’m not coding, I’m either conquering peaks or enjoying a
              well-earned movie marathon.
            </div>
          </motion.p>
        </HeroText>

        <StyledLink to="/about">Know Me</StyledLink>
        <div className="image-container">
          <img src={working} alt="girl working img" />
        </div>
      </ProfessionalSection>
    </HeroContainer>
  );
};

export default HeroSection;

// Styled Components

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ProfessionalSection = styled.div`
  display: flex;
  flex-direction: column;
  // flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5rem;

  .image-container {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 15rem;

    @media (max-width: 768px) {
      height: 12rem;
    }

    @media (max-width: 480px) {
      height: 9rem;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;
const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  padding: 3rem 2rem;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text1};
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Dancing Script", cursive;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentText};
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    font-size: 0.8rem;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: 3.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 480px) {
      // padding: 1rem 1rem;
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.secondaryText};
    @media (max-width: 480px) {
      // padding: 1rem 1rem;
      font-size: 1.2rem;
    }
  }

  div {
    font-size: inherit;
    padding: 15px 4rem;
    text-align: center;

    @media (max-width: 768px) {
      padding: 15px 1rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
      padding: 10px 0.2rem;
    }
  }
`;
const Tagline = styled.div`
  font-size: 1rem;
  font-style: italic;
  font-family: "Dancing Script", cursive;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
