import React from "react";
import styled from "styled-components";

const ProjectCard = ({
  title,
  description,
  tech,
  role,
  company,
  duration,
  type,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Card
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <CardHeader>
        <h3>{title}</h3>
        {type === "project" && tech && <p>{tech}</p>}
        {type === "experience" && (
          <>
            <p>{company}</p>
            <p>{role}</p>
            <p>{duration}</p>
          </>
        )}
      </CardHeader>
      <CardBody>
        <p>{description}</p>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;

// Styled Components

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.backgrounds.background3};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Ensures content is evenly spaced */
  height: 35vh;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    height: auto;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text1};
  padding-top: 1rem;
  h3 {
    font-size: 1.8rem;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1rem;
    margin: 0.5rem 0;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

const CardBody = styled.div`
  margin-bottom: 1rem;

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text1};

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;
