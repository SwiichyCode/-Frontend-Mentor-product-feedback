import React from "react";
import styled from "styled-components";
import { AsideFilter } from "../components/view/Aside/AsideFilter";
import { AsideHeader } from "../components/view/Aside/AsideHeader";
import { AsideRoadmap } from "../components/view/Aside/AsideRoadmap";
import { MainBoard } from "../components/view/Main/MainBoard";
import { MainHeader } from "../components/view/Main/MainHeader";
import { ContainerLayout } from "../components/layout/ContainerLayout";

export const Feedback = () => {
  return (
    <ContainerLayout>
      <Wrapper>
        <Aside>
          <AsideHeader />
          <AsideFilter />
          <AsideRoadmap />
        </Aside>
        <Main>
          <MainHeader />
          <MainBoard />
        </Main>
      </Wrapper>
    </ContainerLayout>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: min-content;
  max-width: calc(255px + 825px + 30px);
  display: flex;
  gap: 30px;
  padding-top: 92px;
`;

const Aside = styled.aside`
  width: 100%;
  max-width: 255px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Main = styled.main`
  width: 100%;
  max-width: 825px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
