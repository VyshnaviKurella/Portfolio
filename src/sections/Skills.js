import React from 'react';
import styled from 'styled-components';
import { FaJava, FaJsSquare, FaPython, FaReact, FaAngular, FaNodeJs,FaVuejs, FaDatabase  } from 'react-icons/fa';
import { SiTypescript, SiGraphql, SiRedux, SiBootstrap, SiKubernetes, SiDocker, SiJenkins, SiGit, SiGithub, SiPostman, SiMocha, SiJest, SiWebpack, SiYarn, SiNginx, SiJira,SiVisualstudiocode , SiMysql} from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "AngularJS", icon: <FaAngular /> },
  { name: "Vue.js", icon: <FaVuejs /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  // { name: "Material UI", icon: <SiMaterialUi /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <FaNodeJs /> }, 
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "SQL", icon: <SiMysql /> }, 
  // { name: "Amazon EC2", icon: <SiAmazonaws /> },
  { name: "Jenkins", icon: <SiJenkins /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Mocha", icon: <SiMocha /> },
  // { name: "Jasmine", icon: <SiJasmine /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "VS Code", icon: <SiVisualstudiocode /> },
  // { name: "Eclipse", icon: <SiEclipsemosquitto /> },
  { name: "Webpack", icon: <SiWebpack /> },
  { name: "Yarn", icon: <SiYarn /> },
  { name: "Nginx", icon: <SiNginx /> },
  { name: "Jira", icon: <SiJira /> },
];


const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <h1>My Skills</h1>
      <SkillWrapper>
        <SkillList>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SkillCard>
              <IconContainer>{skill.icon}</IconContainer>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          </motion.div>
        ))}
        </SkillList>
        <SkillList>
          {skills.map((skill, index) => (
            <motion.div
              key={`copy-${index}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <SkillCard>
                <IconContainer>{skill.icon}</IconContainer>
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            </motion.div>
          ))}
        </SkillList>
      </SkillWrapper>
    </SkillsContainer>
  );
};

export default Skills;

const SkillsContainer = styled.div`
  padding: 8rem 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.backgrounds.background1};
  color: ${({ theme }) => theme.colors.text};
  overflow:hidden;

  h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const SkillWrapper = styled.div`
  display: flex;
  gap: 2rem;
  animation: scroll 15s linear infinite; /* Continuous scroll effect */
   flex-direction: row;
  align-items: center;
  &:hover{
  animation-play-state: paused;
}
  /* Animation for scrolling */
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const SkillList = styled.div`
  display: flex;
  gap: 2rem; /* Spacing between icons */
  flex-shrink: 0;
`;
const SkillCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
    animation-play-state: paused;
  }
`;

const IconContainer = styled.div`
  font-size: 3rem;
`;

const SkillName = styled.p`
  margin-top: 1rem;w
  font-size: 1.2rem;
  font-weight: bold;
`;
