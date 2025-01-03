import React, { useState} from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  // const [visible, setVisible] = useState(false); // Tracks visibility for animation

  const projects = [
    {
      id: 1,
      title: "Maker's Mart",
      description: "An e-commerce platform that connects buyers and sellers, with features like a secure login system, product management, and a seller dashboard.",
      tech: "MERN Stack, API Development, Cloudinary",
      details: {
        overview: "Maker's Mart is a fully-featured e-commerce platform designed to facilitate seamless interaction between buyers and sellers. With a robust login system, categorized product displays, and an intuitive seller dashboard, this platform empowers users to shop or sell products with ease.",
        tools: "Frontend: React.js, HTML, CSS | Backend: Node.js, Express.js | Database: MongoDB | Authentication: JWT and Cookies | Image Hosting: Cloudinary",
        contributions: [
          "Implemented password hashing and secure user login with authentication and cookies.",
          "Developed the product display page with pagination and a navigation bar to allow better product exploration.",
          "Created a dedicated cart database to manage users' carts and integrated Cloudinary for optimized product images.",
          "Designed and developed a seller dashboard, providing insights on sales, revenue, and an easy-to-use interface to add new products.",
        ],
      },
    },
    {
      id: 2,
      title: "Crop Disease Detection (Hackathon Project - ACI 2018, GRIET)",
      description: "A machine learning model that identifies crop diseases based on leaf images, trained using the Random Forest classifier with an accuracy of 70%.",
      tech: "Python, Machine Learning, Random Forest Classifier",
      details: {
        overview: "This machine learning project aims to classify plant diseases based on images of their leaves. Using the Random Forest classifier, the model was trained with 500 leaf images to achieve a classification accuracy of about 70%.",
        tools: "Python | Random Forest Classifier | Dataset of 500 leaf images",
        contributions: [
          "Collected and preprocessed the dataset, splitting it into 80% training and 20% testing data.",
          "Implemented the Random Forest classifier to detect plant diseases from leaf morphology.",
          "Achieved a classification accuracy of 70%, improving the model by fine-tuning hyperparameters.",
        ],
      },
    },
    {
      id: 3,
      title: "Infy Training Project",
      description: "A data management project developed with Node.js and Express.js, focusing on server-side logic, API integration, and ensuring responsiveness.",
      tech: "Node.js, Express.js, API Development, Responsive Design",
      details: {
        overview: "Developed for Infosys, this project focused on data management and the development of server-side logic using Node.js and Express.js. It features two microservices for efficient data handling and integrates a client-side API for smooth communication between the front and backends.",
        tools: "Backend: Node.js, Express.js | API Testing: Postman | Database: SQL/NoSQL",
        contributions: [
          "Designed and structured data models for efficient querying.",
          "Developed server-side logic using Node.js and Express.js, implementing two micro-services for enhanced system modularity.",
          "Integrated the client-side functionality with the server-side API, ensuring seamless data transfer and user authentication.",
        ],
      },
    },
    {
      id: 4,
      title: "Intrusion Detection in Big Data Environment",
      description: "A project aimed at detecting network traffic attacks using the Support Vector Machine algorithm with a high accuracy rate of 92%.",
      tech: "Python, Machine Learning, SVM, Data Preprocessing",
      details: {
        overview: "This project aims to detect anomalies in network traffic by classifying data as either normal activity or an attack. Using the Support Vector Machine (SVM) algorithm, the model achieves 92% accuracy and can be deployed in big data environments for cybersecurity purposes.",
        tools: "Python | SVM Algorithm | KDD Cup 1999 Dataset",
        contributions: [
          "Preprocessed the dataset by splitting it into training (80%) and testing (20%) data.",
          "Implemented the SVM algorithm for classification, achieving an accuracy of 92%.",
          "Enhanced the model's performance through hyperparameter optimization.",
        ],
      },
    },
    {
      id: 5,
      title: "Sentiment Analysis on Amazon Customer Reviews",
      description: "A deep learning project that analyzes customer reviews using CNN to detect fake reviews and identify the most popular products based on customer feedback.",
      tech: "Java, Deep Learning, CNN, Data Augmentation",
      details: {
        overview: "This deep learning project analyzes patterns in Amazon product reviews to classify whether reviews are positive or negative. Using Convolutional Neural Networks (CNN), the model achieves 81% accuracy in identifying sentiment and detecting fake reviews.",
        tools: "Java | CNN (Convolutional Neural Network) | Eclipse | Data Augmentation",
        contributions: [
          "Applied CNN for text classification, optimizing the model to identify sentiment from review text.",
          "Detected fake reviews by analyzing patterns in review ratings and text.",
          "Optimized CNN configurations to reduce false positives by 25%, improving model accuracy.",
        ],
      },
    },
  ];
  
  const openPopup = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

 
  return (
    <ProjectsContainer
      id="projects-section"
      onMouseMove={handleMouseMove}
   
    >
      <Title>My Projects</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <motion.div
          key={project.id}
          initial={{
            x: index % 2 === 0 ? '-100vw' : '100vw', // Slide in alternately from left and right
            opacity: 0,
          }}
          // whileInView={{
          //   x: 0,
          //   opacity: 1,
          // }}
          whileInView={{ x: 0, opacity: 1, viewport: { once: false, amount: 0.5 } }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            delay: 0.35 * index, // Stagger animation for each card
          }}
          // viewport={{ once: false, amount: 0.2 }} 
          animate={{
           transform: 'translateX(0)',
          // x:0,
            opacity: 1,
          }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tech={project.tech}
              type="project"
              onClick={() => openPopup(project)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </motion.div>
        ))}
      </ProjectsGrid>
      {isHovering && (
        <ViewText
          style={{
            top: `${cursorPosition.y + 15}px`,
            left: `${cursorPosition.x + 15}px`,
          }}
        >
          View
        </ViewText>
      )}
      {isPopupOpen && selectedProject && (
        <PopupOverlay>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <Popup>
              <h2>{selectedProject.title}</h2>
              
              <p>{selectedProject.details.overview}</p>
              <div>
                <p> Tools Used:</p>
              <p>{selectedProject.details.tools}</p>
              </div>
              <div>
                <p> My Contribution </p>
                <ContributionsList>
          {selectedProject.details.contributions.map((contribution, index) => (
            <li key={index}>{contribution}</li>
          ))}
        </ContributionsList>
              </div>          
              <button onClick={closePopup}>Close</button>
            </Popup>
          </motion.div>
        </PopupOverlay>
      )}
    </ProjectsContainer>
  );
};

export default Projects;

// Styled Components

const ProjectsContainer = styled.div`
  padding: 4rem 8rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  justify-items: center;
   align-items: stretch;
  margin-top: 2rem;
`;

const ViewText = styled.div`
  position: fixed;
  font-size: 1.2rem;
  color: black;
  background-color: #F7B7A3;
  padding: 5px 10px;
  border-radius: 5px;
  pointer-events: none;
  z-index: 9999;
  white-space: nowrap;
  transition: opacity 0.2s ease;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Popup = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  border-radius: 10px;
  width: 50vw;
  color: ${({ theme }) => theme.colors.text};

  button {
    background-color: ${({ theme }) => theme.colors.accent};
    border: none;
    padding: 10px;
    color: white;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accentHover};
    }
  }
`;


const ContributionsList = styled.ul`
  margin-top: 1rem;
  padding-left: 1rem;
  color: ${({ theme }) => theme.colors.text};

  li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }
`;