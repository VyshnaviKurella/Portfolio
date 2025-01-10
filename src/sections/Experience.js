import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const Experience = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const experiences = [
    {
      id: 1,
      company: "UC Irvine",
      role: "Software Engineer",
      duration: "Feb 2024 - Present",
      location: "Irvine, CA",
      summary:
        "Focused on backend API development, database optimization, and frontend user experience.",
      details:
        "Working as a Software Engineer at UC Irvine has been an enriching journey of building scalable systems and optimizing data flows. The opportunity to create robust APIs using Python and Flask taught me the importance of efficient system design and attention to detail. Optimizing SQL queries gave me a deeper understanding of database architectures and the nuances of query performance. The challenge of designing intuitive Vue.js components pushed me to prioritize user experience and explore new ways to enhance interactivity. This role improved my problem-solving skills and reinforced the importance of user-centric design in creating impactful applications.",
      contributions: [
        "Developed a scalable backend API using Python and Flask for a chatbot application, achieving a 30% improvement in data retrieval efficiency.",
        "Enhanced database performance by optimizing SQL queries, resulting in an 18% increase in efficiency for the MySQL database.",
        "Created custom Vue.js components to record and display user nicotine intake, enhancing user experience through interactive progress visualization.",
      ],
    },
    {
      id: 2,
      company: "UC Irvine",
      role: "Full Stack Developer",
      duration: "Jul 2023 - Oct 2023",
      location: "Irvine, CA",
      summary:
        "Developed a live scoreboard system, deployed it on AWS, and implemented RESTful APIs to improve data processing.",
      details:
        "In this role, I learned how to balance functionality with performance and scalability while working on a live scoreboard system. Developing with the MERN stack taught me to handle real-time data updates efficiently, while deploying the application on AWS gave me a first-hand understanding of maintaining high system reliability and uptime. Creating a RESTful API refined my approach to building secure, high-performance systems. Collaborating with cross-functional teams enhanced my ability to communicate technical ideas effectively, and tackling real-world challenges made me more confident in delivering end-to-end solutions.",
      contributions: [
        "Improved user experience by developing a live scoreboard for a simulation platform with a MERN stack, enhancing score update efficiency by 35%.",
        "Deployed the application on AWS with Nginx, maintaining an impressive 97.8% uptime for consistent user access.",
        "Enhanced system performance and security by constructing a RESTful API for game score management and implementing GitHub authentication, reducing login times by 40%.",
      ],
    },
    {
      id: 3,
      company: "Infosys (Client: AT&T DirecTv)",
      role: "Frontend Software Engineer",
      duration: "Sep 2020 - Aug 2022",
      location: "India",
      summary:
        "Developed interactive webpages and an analytics suite to improve user engagement and conversion rates.",
      details:
        "This role helped me transition from a theoretical understanding of development to real-world implementation. Building interactive webpages deepened my expertise in React and Node.js while tracking user behavior through analytics taught me the value of data-driven decisions. Collaborating with diverse teams across multiple time zones improved my interpersonal skills and exposed me to the intricacies of project management. The lessons learned in improving task accuracy and reducing bugs shaped my development process, making it more structured and reliable.",
      contributions: [
        "Collaborated with cross-functional teams to develop 18 interactive webpages using React and Node.js, resulting in a 25% improvement in page loading speed.",
        "Implemented an analytics suite that enhanced user behavior tracking, contributing to an 8% increase in conversion rates over three months.",
        "Refined the development process by ensuring thorough validation of acceptance criteria and on-time task completion, reducing reported bugs by 20%.",
      ],
    },
    {
      id: 4,
      company: "Ezerka Technology Solutions",
      role: "Junior Software Developer",
      duration: "May 2019 - Jul 2020",
      location: "India",
      summary:
        "Optimized data fetching with GraphQL, improved React component rendering, and participated in Agile sprints to ensure high team productivity and project delivery.",
      details:
        "At Ezerka, I learned to be proactive in identifying inefficiencies and finding ways to address them. Working with GraphQL to resolve data retrieval issues was a turning point in my understanding of modern data querying techniques. Optimizing React components taught me how small changes could lead to significant performance improvements. Participating in Agile sprints helped me develop a structured approach to tasks, while documenting processes improved my communication skills. This role gave me a foundation in collaborative development and showed me how attention to detail can have a significant impact on the success of a project.",
      contributions: [
        "Participated in Agile development processes, overcoming project delays and improving team productivity by 10%, with a 95% sprint completion rate.",
        "Revamped data fetching strategies with GraphQL, resolving inefficient data queries, which enhanced data retrieval speeds by 50%.",
        "Optimized React component rendering by identifying and refactoring performance bottlenecks, resulting in a 30% reduction in re-render times.",
      ],
    },
  ];

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
              x: index % 2 === 0 ? "-100vw" : "100vw",
              opacity: 0,
            }}
            animate={{
              transform: "translateX(0)",
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.3 * index, // Stagger animation
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <ProjectCard
              title={exp.role}
              description={exp.summary}
              company={exp.company}
              duration={exp.duration}
              type="experience"
              onClick={() => openPopup(exp)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </motion.div>
        ))}
      </ExperienceList>
      {isHovering && (
        <ViewText
          style={{
            top: `${cursorPosition.y - 35}px`,
            left: `${cursorPosition.x - 30}px`,
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
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Popup>
              <h2>{selectedExperience.role}</h2>
              <Company>{selectedExperience.company}</Company>
              <Duration>{selectedExperience.duration}</Duration>
              <Details>{selectedExperience.details}</Details>
              <ContributionsTitle>Key Contributions</ContributionsTitle>
              <ContributionsList>
                {selectedExperience.contributions.map((contribution, index) => (
                  <li key={index}>{contribution}</li>
                ))}
              </ContributionsList>
              <CloseButton onClick={closePopup}>CLOSE</CloseButton>
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
  background-color: ${({ theme }) => theme.colors.backgrounds.background1};
  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;
const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 2rem;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  align-items: flex-start;
  z-index: 9999;
  overflow-y: auto;
`;

const Popup = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  padding: 2rem;
  border-radius: 10px;
  width: 52vw;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 1024px) {
    /* Tablet screens */
    width: 70vw;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    /* Small tablets and larger mobile screens */
    width: 85vw;
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    /* Small mobile screens */
    width: 95vw;
    padding: 1rem;
  }
`;
const ViewText = styled.div`
  position: fixed;
  font-size: 1.2rem;
  color: black;
  background-color: ${({ theme }) => theme.colors.accentText};
  padding: 20px 15px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  white-space: nowrap;
  transition: opacity 0.2s ease;
`;

const Company = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0.5rem 0;
`;

const Duration = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin: 0.5rem 0;
`;

const Details = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin: 1rem 0;
  text-align: left;
`;

const ContributionsTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem;
`;

const ContributionsList = styled.ul`
  list-style: disc;
  margin-left: 2rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};

  li {
    margin-bottom: 0.5rem;
    text-align: left;
  }
`;

const CloseButton = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.text};
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentText};
  }
`;
