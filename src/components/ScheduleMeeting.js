import React from "react";
import { InlineWidget } from "react-calendly";
import styled from "styled-components";

const ScheduleMeeting = () => {
  return (
    <ScheduleContainer>
      <h1>Schedule a Chat</h1>
      <InlineWidgetWrapper>
        <InlineWidget url="https://calendly.com/vyshnavk-uci" />
      </InlineWidgetWrapper>
    </ScheduleContainer>
  );
};

export default ScheduleMeeting;

const ScheduleContainer = styled.div`
  padding: 3rem 2rem;
  background-color: ${({ theme }) => theme.colors.backgrounds.background1};
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 2rem;
  }

    @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
   padding: 0.25rem;
    h1 {
      font-size: 1.8rem;
    }

`;
const InlineWidgetWrapper = styled.div`
  width: 100%;
  max-width: 50vw;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  min-height: 600px;

  @media (max-width: 768px) {
    min-height: 500px;
    max-width: 70vw;
  }

  @media (max-width: 480px) {
    min-height: 400px;
    max-width: 80vw;
  }
`;
