import React, { useState } from 'react';
// import { a } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBar>
      <Logo>
        <a href="\">Vyshnavi Kurella</a>
      </Logo>
      <Hamburger onClick={ToggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Navas $isOpen={isOpen}>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#projects">Projects</a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#skills">Skills</a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#experience">Experience</a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
            <a href="#contact" >Contact</a>
        </motion.li>
      </Navas>
    </NavBar>
  );
};

export default Header;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  position: sticky;
  top: 0;
  z-index: 1500;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
`;

const Navas = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  li {
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.1rem;
      transition: color 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }

  @media (max-width: 768px) {
    display:  ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    hrefp: 70px;
    right: 10px;
    background: ${({ theme }) => theme.colors.secondary};
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
    margin-bothrefm: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
