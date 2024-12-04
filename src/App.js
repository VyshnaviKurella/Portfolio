import React from 'react';
import { ThemeProvider,styled } from 'styled-components';
// import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Skills from './sections/Skills'
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  return (
    <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <GlobalStyles/> 
        <Header/>
        <Section id="home">
        <Home />
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

       
        <Footer/>
      

    </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

const Section = styled.section`
  // width:100vw
  // min-height: 100vh; 
  
`;