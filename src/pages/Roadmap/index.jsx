import React from "react";
import styled from "styled-components";
import { TabsNavigation } from "../../components/common/TabsNavigation";
import { ContainerLayout } from "../../components/layout/ContainerLayout";
import { RoadmapHeader } from "../../components/view/RoadmapHeader";
import { RoadmapList } from "../../components/view/RoadmapList";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Roadmap = () => {
  const size = useWindowSize();

  return (
    <ContainerLayout>
      <Wrapper>
        <RoadmapHeader />
        {size.width < 768 && <TabsNavigation />}
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

  @media (max-width: 768px) {
    gap: 0px;
  }
`;
