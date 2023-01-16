import React from "react";
import styled from "styled-components";
import { useFeedbackStore } from "../../../stores/feedbackStore";
import { RoadmapCard } from "../RoadmapCard";
import { initialStatus, generateSubtitles } from "./utils";

export const RoadmapList = () => {
  const feedbacks = useFeedbackStore((state) => state.feedbacks);
  const status = initialStatus(feedbacks);
  const roadmap = getRoadmap(status);

  function getRoadmap(status) {
    return feedbacks.filter((feedback) => status.includes(feedback.status));
  }

  function roadmapLength(status) {
    return roadmap.filter((feedback) => feedback.status === status).length;
  }

  return (
    <Container>
      {status.map((status, index) => {
        return (
          <Column key={index}>
            <ColumnHeader>
              <ColumnTitle>
                {status} ({roadmapLength(status)})
              </ColumnTitle>
              <ColumnSubtitle>{generateSubtitles(status)}</ColumnSubtitle>
            </ColumnHeader>

            <ColumnList>
              {roadmap.map((feedback, index) => {
                if (feedback.status === status) {
                  return <RoadmapCard key={index} feedback={feedback} />;
                }
              })}
            </ColumnList>
          </Column>
        );
      })}
    </Container>
  );
};

const Container = styled.ul`
  width: 100%;
  display: flex;
  gap: 30px;
`;

const Column = styled.ul`
  width: 100%;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ColumnHeader = styled.div``;

const ColumnTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: #3a4374;
  text-transform: capitalize;
  margin-bottom: 4px;
`;

const ColumnSubtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #647196;
`;

const ColumnList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
