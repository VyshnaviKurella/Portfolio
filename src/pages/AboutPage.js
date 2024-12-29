import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const AboutSection = () => {




  return (
    <AboutContainer
    
    >
      {/* <CurvedBackground> */}
        <Content>
          
          {/* <h2>About Me</h2> */}
          <p>
          Hi! I’m Vyshnavi Kurella, a Full-stack Developer passionate about building impactful, user-friendly solutions. I specialize in turning ideas into code—whether it's developing seamless applications or diving into machine learning to make systems smarter. My journey has led me through many tech stacks, from front-end interfaces to back-end systems, always driven by a passion for problem-solving and delivering meaningful results.

</p><p>Alongside my Master’s degree in Computer Science from UC Irvine, I’ve honed my skills in creating efficient, scalable software and exploring emerging technologies. I’m always up for learning something new, adapting quickly, and tackling challenges head-on—whether it’s solving a tricky bug or learning a new framework.
          </p>
          <p>
Education
Master’s in Computer Science, University of California, Irvine.
Key Courses:

Operating Systems
Artificial Intelligence
Machine Learning
Data Structures
Database & Data Management
Parallel Distributed Computing
          </p>
<h2>What Drives Me</h2>
          <p>
          My passion for tech goes beyond just coding. It’s about creating solutions that make a difference. Whether it’s optimizing backend APIs, working with data models, or building intuitive user interfaces, I find joy in making complex tasks simple and efficient. I’m always eager to take on new challenges and love learning and growing with each project.

When I'm not writing code, you'll likely find me trekking through nature, chasing mountain peaks, or binge-watching my favorite series. I believe in maintaining a healthy balance between my professional work and personal passions, as both contribute to my growth as a developer.
          </p>
<h2> A Glimpse of Me</h2>
<p>I’ve had the privilege of presenting my work at some exciting events:</p>

<p>
DEFCON: I worked with my team to create a real-time scoreboard for an autonomous driving CTF project at DEFCON, where we integrated complex data streams into a seamless, interactive experience.
</p>
<Gallery>
            <img src="event1.jpg" alt="Defcon'23" />
          </Gallery>
<p>Maker’s Mart at UC Irvine Project Expo: I presented Maker’s Mart, an e-commerce platform, at UCI’s Project Expo. This project was developed using the MERN stack and provided hands-on experience in building full-stack applications.</p>

         <Gallery>
            <img src="event1.jpg" alt="Maker's Mart" />
          </Gallery> 
        </Content>
        
      {/* </CurvedBackground> */}
    </AboutContainer>
  );
};

export default AboutSection;

// Styled Components

const AboutContainer = styled(motion.div)`
  // background-color: ${({ theme }) => theme.colors.background};
  // overflow: hidden;
  // position: absolute;;
  // top: 102%;  /* Start off-screen from below */
  // left: 0;
  // width: 100%;


    background: linear-gradient(190deg, #a1c6ea, #d6f5e3, #ffd1dc, #fae3d9);
  min-height: 100vh;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

// const CurvedBackground = styled.div`
//   background: ${({ theme }) => theme.colors.primary};
//   border-bottom-left-radius: 20% 50%;
//   border-bottom-right-radius: 20% 50%;
//   padding: 3rem 2rem;
// `;

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

