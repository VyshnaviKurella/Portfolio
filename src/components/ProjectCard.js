import React from 'react';
import styled from 'styled-components';

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
    <Card onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <CardHeader>
        <h3>{title}</h3>
        {type === 'project' && tech && <p>{tech}</p>}
        {type === 'experience' && (
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
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondaryText};
    margin: 0.5rem 0;
  }
`;

const CardBody = styled.div`
  margin-bottom: 1rem;

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;
