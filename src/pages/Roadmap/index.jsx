import React from "react";
import styled from "styled-components";
import { ContainerLayout } from "../../components/layout/ContainerLayout";
import { RoadmapHeader } from "../../components/view/RoadmapHeader";
import { RoadmapList } from "../../components/view/RoadmapList";

export const Roadmap = () => {
  return (
    <ContainerLayout>
      <Wrapper>
        <RoadmapHeader />
        <RoadmapList />
      </Wrapper>
    </ContainerLayout>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 78px 0;
`;
