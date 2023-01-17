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
    <Main>
      {status.map((status, index) => {
        return (
          <ColumnSection key={index}>
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
          </ColumnSection>
        );
      })}
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  display: flex;
  gap: 30px;
`;

const ColumnSection = styled.section`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ColumnHeader = styled.header``;

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

const ColumnList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
