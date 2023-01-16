import React from "react";
import { useFeedbackStore } from "../../../stores/feedbackStore";
import { AsideCardLayout } from "../../layout/AsideCardLayout";
import * as S from "./styles.js";

export const AsideRoadmap = () => {
  const feebacks = useFeedbackStore((state) => state.feedbacks);

  const planned = feebacks.filter((item) => item.status === "planned");
  const inProgress = feebacks.filter((item) => item.status === "in-progress");
  const live = feebacks.filter((item) => item.status === "live");

  const status = [
    { name: "Planned", value: planned.length, theme: "#F49F85" },
    { name: "In-Progress", value: inProgress.length, theme: "#AD1FEA" },
    { name: "Live", value: live.length, theme: "#62BCFA;" },
  ];

  return (
    <AsideCardLayout>
      <S.Roadmap>
        <S.Header>
          <S.Title>Roadmap</S.Title>
          {/* Transform in link */}
          <S.StyledLink to="/roadmap">View</S.StyledLink>
        </S.Header>
        <S.List>
          {status.map(({ name, value, theme }) => {
            return (
              <S.ItemList key={name}>
                <div className="left-side">
                  <S.Circle theme={theme} />
                  <h2>{name}</h2>
                </div>
                <span>{value}</span>
              </S.ItemList>
            );
          })}
        </S.List>
      </S.Roadmap>
    </AsideCardLayout>
  );
};
