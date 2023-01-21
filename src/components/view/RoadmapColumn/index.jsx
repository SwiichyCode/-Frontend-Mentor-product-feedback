import React from "react";
import { RoadmapCard } from "../RoadmapCard";
import { generateSubtitles } from "../RoadmapList/utils";
import * as S from "./styles.js";

export const RoadmapColumn = ({ status, index, roadmapLength, roadmap }) => {
  return (
    <S.ColumnSection key={index}>
      <S.ColumnHeader>
        <S.ColumnTitle>
          {status} ({roadmapLength(status)})
        </S.ColumnTitle>
        <S.ColumnSubtitle>{generateSubtitles(status)}</S.ColumnSubtitle>
      </S.ColumnHeader>

      <S.ColumnList>
        {roadmap.map((feedback, index) => {
          if (feedback.status === status) {
            return <RoadmapCard key={index} feedback={feedback} />;
          }
        })}
      </S.ColumnList>
    </S.ColumnSection>
  );
};
