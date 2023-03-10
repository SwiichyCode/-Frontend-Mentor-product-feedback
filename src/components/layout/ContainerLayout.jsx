import React from "react";
import styled from "styled-components";

export const ContainerLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: #f7f8fd;
  padding: 92px 40px;

  @media (max-width: 868px) {
    padding: 59px 40px;
  }

  @media (max-width: 868px) {
    padding: 56px 40px 113px 39px;
  }
`;
