import React from "react";
import styled from "styled-components";
import { AsideCardLayout } from "../../layout/AsideCardLayout";

export const AsideHeader = () => {
  return (
    <AsideCardLayout bgActive>
      <Wrapper>
        <h1>Frontend Mentor</h1>
        <p>Feedback Board</p>
      </Wrapper>
    </AsideCardLayout>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: calc(137px - 48px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #ffffff;

  @media (max-width: 768px) {
    height: 100%;
  }

  h1 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 29px;
    letter-spacing: -0.25px;
  }

  p {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 22px;
    mix-blend-mode: normal;
    opacity: 0.75;
  }
`;
