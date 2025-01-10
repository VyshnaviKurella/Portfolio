import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Profile from "../assets/Profile1.jpg";
import defcon1 from "../assets/Defcon1.jpg";
import defcon2 from "../assets/Defcon2.jpg";
import UCIexpo1 from "../assets/UCI expo1.jpg";
import UCIexpo2 from "../assets/UCI expo2.jpg";
import UCIexpo3 from "../assets/UCI expo3.jpg";
import hiker from "../assets/hiker (1).png";

const AboutSection = () => {
  return (
    <AboutContainer>
      <Content>
        <div className="intro">
          <Gallery>
            <img src={Profile} alt="profile" />
          </Gallery>
          <p>
            Hi! I’m <strong>Vyshnavi Kurella</strong>, a{" "}
            <strong>Full-stack Developer</strong> passionate about building
            impactful, user-friendly solutions. I specialize in turning ideas
            into code—whether it's developing seamless applications or diving
            into machine learning to make systems smarter. My journey has led me
            through many tech stacks, from front-end interfaces to back-end
            systems, always driven by a passion for problem-solving and
            delivering meaningful results.
          </p>
          <p>
            Alongside my{" "}
            <strong>Master’s degree in Computer Science from UC Irvine</strong>,
            I’ve honed my skills in creating efficient, scalable software and
            exploring emerging technologies. I’m always up for learning
            something new, adapting quickly, and tackling challenges
            head-on—whether it’s solving a tricky bug or learning a new
            framework.
          </p>
        </div>

        <div className="education">
          <h2>Education</h2>
          <p>
            <strong>Master’s in Computer Science</strong>, University of
            California, Irvine.
          </p>
          <p>
            <strong>Key Courses</strong>
          </p>
          <ul className="horizontal-list">
            <li>Operating Systems</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Data Structures</li>
            <li>Database & Data Management</li>
            <li>Parallel Distributed Computing</li>
          </ul>
        </div>
      </Content>

      <SectionBackground className="what-drives-me">
        <Content>
          <h2>What Drives Me</h2>
          <p>
            My passion for tech goes beyond just coding—it’s about creating
            solutions that make a difference. Whether it’s optimizing backend
            APIs, working with data models, or building intuitive user
            interfaces, I find joy in making complex tasks simple and efficient.
            I’m always eager to take on new challenges and love learning and
            growing with each project.
          </p>
          <p>
            When I'm not writing code, you'll likely find me trekking through
            nature, chasing mountain peaks, or binge-watching my favorite
            series. I believe in maintaining a healthy balance between my
            professional work and personal passions, as both contribute to my
            growth as a developer.
          </p>
        </Content>
        <span className="image-container">
          <img src={hiker} loading="lazy" alt="hiking img" />
        </span>
      </SectionBackground>

      <SectionBackground className="glimpse-of-me">
        <Content>
          <h2>A Glimpse of Me</h2>
          <p>
            I’ve had the privilege of presenting my work at some exciting
            events:
          </p>
          <div>
            <strong>DEFCON:</strong> I worked with my team to create a real-time
            scoreboard for an autonomous driving CTF project at DEFCON, where we
            integrated complex data streams into a seamless, interactive
            experience.
          </div>
          <Gallery>
            <img src={defcon1} loading="lazy"alt="Defcon'23" />
            <img src={defcon2} loading="lazy" alt="Defcon'23" />
          </Gallery>
          <div>
            <strong>Maker’s Mart at UC Irvine Project Expo:</strong> I presented
            Maker’s Mart, an e-commerce platform, at UCI’s Project Expo. This
            project was developed using the MERN stack and provided hands-on
            experience in building full-stack applications.
          </div>
          <Gallery>
            <img src={UCIexpo1} loading="lazy" alt="Maker's Mart Team" />
            <img src={UCIexpo2} loading="lazy" alt="Maker's Mart Team" />
            <img src={UCIexpo3} loading="lazy" alt="Maker's Mart Team" />
          </Gallery>
        </Content>
      </SectionBackground>
    </AboutContainer>
  );
};

export default AboutSection;

// Styled Components

const AboutContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.backgrounds.background1};
  min-height: 100vh;
  // padding: rem 0;
  color: ${({ theme }) => theme.colors.text};
`;

const SectionBackground = styled.div`
  padding: 4rem 0;

  position: relative;
  &.what-drives-me {
    background-color: ${({ theme }) => theme.colors.backgrounds.background2};
    color: ${({ theme }) => theme.colors.text};
  }

  &.glimpse-of-me {
    background-color: ${({ theme }) => theme.colors.backgrounds.background1};
    color: ${({ theme }) => theme.colors.text};
  }

  .image-container {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media (max-width: 850px) {
    padding: 8rem 0;
  }
`;

const Content = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p, ul {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.secondaryText};
    line-height: 1.5;
  }

  div{
  font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.secondaryText};
    line-height: 1.6;
    padding: 1rem;
  }

ul.horizontal-list {
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  padding: 0;
  list-style: none;
  margin: 0; 
}

ul.horizontal-list li {
  margin: 0 10px;
}
  .intro p,
  .education p {
    margin-bottom: 1rem;
  }
    .intro{
    padding: 2rem;
    }

.education{


`;

const Gallery = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
  padding-bottom: 2rem;

  img {
    width: 20rem;
    height: 18rem;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    img {
      width: 90%;
      height: auto;
    }
  }
`;
