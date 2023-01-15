import React, { useState } from "react";
import styled from "styled-components";

export const ButtonFilter = ({ item, handleClick }) => {
  const { text, active } = item;

  return (
    <Container active={active} onClick={() => handleClick(text)}>
      {text}
    </Container>
  );
};

export const Container = styled.div`
  width: min-content;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: ${({ active }) => (active ? "#FFFFFF" : "#4661e6")};
  text-transform: capitalize;
  background: ${({ active }) => (active ? "#4661E6" : "#f2f4ff")};
  border-radius: 10px;
  padding: 5px 17px 6px 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ active }) => (active ? "#FFFFFF" : "#4661e6")};
    background: #cfd7ff;
    background: ${({ active }) => (active ? "#4661E6" : "#cfd7ff")};
  }
`;
