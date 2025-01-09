import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import woman from "../assets/woman.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (id) => {
    if (location.pathname === "/") {
      // If already on the Home page, scroll to section
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to Home with hash
      navigate(`/#${id}`);
    }
  };

  return (
    <>
      <NavBar>
        <Logo>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation("home")}
          >
            <img src={woman} alt="Home" />
          </motion.div>
        </Logo>
        <Hamburger onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Navas $isOpen={isOpen}>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation("skills")}
          >
            Skills
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation("experience")}
          >
            Experience
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation("projects")}
          >
            Projects
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation("contact")}
          >
            Contact
          </motion.li>
        </Navas>
      </NavBar>
    </>
  );
};

export default Header;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 2rem 0rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  position: sticky;
  top: 0;
  z-index: 1500;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  // font-size: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  padding: 5px a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
  img {
    height: 50px;
    width: auto;
  }
`;

const Navas = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;

  li {
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
      transition: color 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 80%;
    right: 0px;
    background: ${({ theme }) => theme.colors.accent};
    padding: 1rem;
    border-radius: 8px;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: ${({ theme }) => theme.colors.text};
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
