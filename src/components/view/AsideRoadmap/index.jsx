import React from "react";
import styled from "styled-components";
import { useFeedbackStore } from "../../../stores/feedbackStore";
import { AsideCardLayout } from "../../layout/AsideCardLayout";

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
      <Roadmap>
        <Header>
          <Title>Roadmap</Title>
          {/* Transform in link */}
          <Link>View</Link>
        </Header>
        <List>
          {status.map(({ name, value, theme }) => {
            return (
              <ItemList key={name}>
                <div className="left-side">
                  <Circle theme={theme} />
                  <h2>{name}</h2>
                </div>
                <span>{value}</span>
              </ItemList>
            );
          })}
        </List>
      </Roadmap>
    </AsideCardLayout>
  );
};

const Roadmap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: #3a4374;
`;

const Link = styled.span`
  font-weight: 600;
  font-size: 13px;
  color: #4661e6;
  mix-blend-mode: normal;
  opacity: 0.45;
  text-decoration: underline;
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ItemList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-side {
    display: flex;
    align-items: center;
    gap: 16px;

    h2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      color: #647196;
    }
  }

  span {
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    text-align: right;
    color: #647196;
  }
`;

const Circle = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme};
`;
