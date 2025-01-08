import React,{useEffect} from 'react';
import styled from 'styled-components';
import HeroSection from '../sections/herosec';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills'
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';
import { useLocation } from 'react-router-dom';



const Home =() =>{

    const location = useLocation();

    useEffect(() => {
     
      if (location.hash) {
        const sectionId = location.hash.substring(1); 
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
    return (
        <>
         <Section id="home">
        <HeroSection />
      </Section>
       
       <Section id="skills">
        <Skills />
      </Section>
      <Section id="experience">
        <Experience />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
       </>
    );
};

export default Home;
const Section = styled.section`
  // width:100vw
  // min-height: 100vh; 
  
`;