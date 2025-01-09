import React from "react";
import styled from "styled-components";
import ContactLinks from "../components/ContactLinks";
import ScheduleMeeting from "../components/ScheduleMeeting";

const ContactSection = () => {
  return (
    <ContactContainer>
      <ContactLinks />
      <Divider />
      <ScheduleMeeting />
    </ContactContainer>
  );
};

export default ContactSection;

const ContactContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem 1rem;
`;

const Divider = styled.hr`
  margin: 2rem 0;
  border: none;
  border-top: 2px solid ${({ theme }) => theme.colors.accent};
  width: 80%;
  margin: 2rem auto;
`;
