import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Experience = () => {
  const [visible, setVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "ABC Corp",
      duration: "Jan 2021 - Present",
      description: "Developed responsive web applications using React.js.",
      details: "Enhanced website performance, improved accessibility, and collaborated with cross-functional teams.",
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "XYZ Ltd",
      duration: "Aug 2019 - Dec 2020",
      description: "Implemented backend APIs using Node.js.",
      details: "Optimized database queries and reduced API response time by 30%.",
    },
  ];

  // Intersection Observer for detecting section visibility
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisible(true);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );
//     observer.observe(document.querySelector('#experience-section')); // Target the section
//     return () => observer.disconnect();
//   }, []);

  const openPopup = (experience) => {
    setSelectedExperience(experience);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <ExperienceContainer
      id="experience-section" 
      onMouseMove={handleMouseMove}
    //   style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease' }}
    >
      <Title>My Experience</Title>
      <ExperienceList>
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{
              x: index % 2 === 0 ? '-100vw' : '100vw',
              opacity: 0,
            }}
            animate={{
             transform: 'translateX(0)',
              opacity: 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.3 * index, // Stagger animation
            }}
            whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: false, amount: 0.2 }} 
          >
            <ProjectCard
              title={exp.role}
              description={exp.description}
              company={exp.company}
              duration={exp.duration}
              type="experience"
              onClick={() => openPopup(exp)} // Open popup when card is clicked
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </motion.div>
        ))}
      </ExperienceList>
      {isHovering && (
        <ViewText
          style={{
            top: `${cursorPosition.y + 15}px`,
            left: `${cursorPosition.x + 15}px`,
          }}
        >
          View
        </ViewText>
      )}
      {isPopupOpen && selectedExperience && (
        <PopupOverlay>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Popup>
              <h2>{selectedExperience.role}</h2>
              <p>{selectedExperience.company}</p>
              <p>{selectedExperience.duration}</p>
              <p>{selectedExperience.details}</p>
              <button onClick={closePopup}>Close</button>
            </Popup>
          </motion.div>
        </PopupOverlay>
      )}
    </ExperienceContainer>
  );
};

export default Experience;

// Styled Components

const ExperienceContainer = styled.div`
  padding: 4rem 14rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
`;
const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 2rem;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column; /* Stacks cards vertically */
  gap: 2rem; /* Space between cards */
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Popup = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  color: ${({ theme }) => theme.colors.text};

  button {
    background-color: ${({ theme }) => theme.colors.accent};
    border: none;
    padding: 10px;
    color: white;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accentHover};
    }
  }
`;
const ViewText = styled.div`
  position: fixed;
  font-size: 1.2rem;
  color: black;
  background-color: #F7B7A3;
  padding: 5px 10px;
  border-radius: 5px;
  pointer-events: none;
  z-index: 9999;
  white-space: nowrap;
  transition: opacity 0.2s ease;
`;