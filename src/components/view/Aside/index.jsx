import React from "react";
import styled from "styled-components";
import { AsideHeader } from "../AsideHeader";
import { AsideFilter } from "../AsideFilter";
import { AsideRoadmap } from "../AsideRoadmap";

export const Aside = () => {
  return (
    <Container>
      <AsideHeader />
      <AsideFilter />
      <AsideRoadmap />
    </Container>
  );
};

const Container = styled.aside`
  width: 100%;
  max-width: 255px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
