import React from "react";
import styled from "styled-components";

export const ButtonFilter = ({ item }) => {
  const { text, active } = item;

  return <Container active={active}>{text}</Container>;
};

export const Container = styled.div`
  width: min-content;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: #4661e6;
  text-transform: capitalize;
  background: ${({ active }) => (active ? "red" : "#f2f4ff")};
  border-radius: 10px;
  padding: 5px 17px 6px 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #4661e6;
    background: #cfd7ff;
  }
`;
