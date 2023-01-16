import React from "react";
import styled from "styled-components";

export const Chip = ({ text }) => {
  return <Container>{text}</Container>;
};

const Container = styled.div`
  width: min-content;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: #4661e6;
  text-transform: capitalize;
  background: #f2f4ff;
  border-radius: 10px;
  padding: 5px 17px 6px 16px;
  user-select: none;
`;
