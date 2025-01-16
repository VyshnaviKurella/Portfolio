
import React from "react";
import styled from "styled-components";
import { GiTreeGrowth } from "react-icons/gi";
import { BiLineChart, BiScatterChart } from "react-icons/bi";
import {
  FaJava,
  FaJsSquare,
  FaPython,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaVuejs,
  FaDatabase,
  FaLayerGroup,
  FaChartBar,
} from "react-icons/fa";
import {
  SiTypescript,
  SiGraphql,
  SiRedux,
  SiBootstrap,
  SiKubernetes,
  SiDocker,
  SiJenkins,
  SiGit,
  SiGithub,
  SiPostman,
  SiMocha,
  SiJest,
  SiYarn,
  SiNginx,
  SiJira,
  SiVisualstudiocode,
  SiMysql,
  SiScikitlearn,
  SiNumpy,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = {
  "Programming & Web Development": [
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "AngularJS", icon: <FaAngular /> },
    { name: "Vue.js", icon: <FaVuejs /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <FaNodeJs /> },
    { name: "GraphQL", icon: <SiGraphql /> },
  ],
  "Databases & Cloud Technologies": [
    { name: "MongoDB", icon: <FaDatabase /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Jenkins", icon: <SiJenkins /> },
  ],
  "Machine Learning & Data Science": [
    { name: "scikit-learn", icon: <SiScikitlearn /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Matplotlib", icon: <FaChartBar /> },
    { name: "Random Forest Classifier", icon: <GiTreeGrowth /> },
    { name: "Logistic Regression", icon: <BiLineChart /> },
    { name: "KNN Clustering", icon: <BiScatterChart /> },
    { name: "Convolutional Neural Networks", icon: <FaLayerGroup /> },
  ],
  "Tools & Version Control": [
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Mocha", icon: <SiMocha /> },
    { name: "Jest", icon: <SiJest /> },
    { name: "VS Code", icon: <SiVisualstudiocode /> },
    { name: "Yarn", icon: <SiYarn /> },
    { name: "Nginx", icon: <SiNginx /> },
    { name: "Jira", icon: <SiJira /> },
  ],
};

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <h1>My Skills</h1>
      {Object.entries(skills).map(([category, skillList]) => (
        <Category key={category}>
          <h2>{category}</h2>
          <SkillList>
            {skillList.map((skill, index) => (
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
        </Category>
      ))}
    </SkillsContainer>
  );
};

export default Skills;

const SkillsContainer = styled.div`
  padding: 6rem 10rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.backgrounds.background1};
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;

  h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const Category = styled.div`
  margin-bottom: 4rem;

  h2 {
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const SkillCard = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    padding: 0.8rem;
  }
`;

const IconContainer = styled.div`
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SkillName = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
