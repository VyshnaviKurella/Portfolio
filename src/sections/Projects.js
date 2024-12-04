import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  // const [visible, setVisible] = useState(false); // Tracks visibility for animation

  const projects = [
    {
      id: 1,
      title: "Live Scoreboard Simulation",
      description: "MERN stack-based live scoreboard simulation for real-time updates.",
      tech: "React, MongoDB, Node.js",
      details: "Built a highly interactive scoreboard using WebSockets for live data synchronization.",
    },
    {
      id: 2,
      title: "Nicotine Tracker",
      description: "Vue.js components for health tracking and nicotine consumption.",
      tech: "Vue.js, MySQL",
      details: "Developed an intuitive dashboard for tracking daily habits with personalized insights.",
    },
    {
      id: 3,
      title: "Live Scoreboard Simulation",
      description: "MERN stack-based live scoreboard simulation for real-time updates.",
      tech: "React, MongoDB, Node.js",
      details: "Built a highly interactive scoreboard using WebSockets for live data synchronization.",
    },
    {
      id: 4,
      title: "Nicotine Tracker",
      description: "Vue.js components for health tracking and nicotine consumption.",
      tech: "Vue.js, MySQL",
      details: "Developed an intuitive dashboard for tracking daily habits with personalized insights.",
    },
    {
      id: 5,
      title: "Live Scoreboard Simulation",
      description: "MERN stack-based live scoreboard simulation for real-time updates.",
      tech: "React, MongoDB, Node.js",
      details: "Built a highly interactive scoreboard using WebSockets for live data synchronization.",
    },
    {
      id: 6,
      title: "Nicotine Tracker",
      description: "Vue.js components for health tracking and nicotine consumption.",
      tech: "Vue.js, MySQL",
      details: "Developed an intuitive dashboard for tracking daily habits with personalized insights.",
    },
  ];

  const openPopup = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
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
    <ProjectsContainer
      id="projects-section"
      onMouseMove={handleMouseMove}
   
    >
      <Title>My Projects</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <motion.div
          key={project.id}
          initial={{
            x: index % 2 === 0 ? '-100vw' : '100vw', // Slide in alternately from left and right
            opacity: 0,
          }}
          // whileInView={{
          //   x: 0,
          //   opacity: 1,
          // }}
          whileInView={{ x: 0, opacity: 1, viewport: { once: false, amount: 0.5 } }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            delay: 0.35 * index, // Stagger animation for each card
          }}
          // viewport={{ once: false, amount: 0.2 }} 
          animate={{
           transform: 'translateX(0)',
          // x:0,
            opacity: 1,
          }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tech={project.tech}
              type="project"
              onClick={() => openPopup(project)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </motion.div>
        ))}
      </ProjectsGrid>
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
      {isPopupOpen && selectedProject && (
        <PopupOverlay>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Popup>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.details}</p>
              <Tech>{selectedProject.tech}</Tech>
              <button onClick={closePopup}>Close</button>
            </Popup>
          </motion.div>
        </PopupOverlay>
      )}
    </ProjectsContainer>
  );
};

export default Projects;

// Styled Components

const ProjectsContainer = styled.div`
  padding: 4rem 8rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  justify-items: center;
  margin-top: 2rem;
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

const Tech = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
