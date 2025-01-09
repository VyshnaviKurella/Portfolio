import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/AboutPage";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <GlobalStyles />

        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
        <Footer />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
