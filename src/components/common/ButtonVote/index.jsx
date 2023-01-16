import React from "react";
import styled from "styled-components";
import iconArrowUp from "../../../assets/shared/icon-arrow-up.svg";

export const ButtonVote = ({ votes, row }) => {
  return (
    <Container row={row}>
      <img src={iconArrowUp} alt="icon-arrow-up" />
      <span>{votes}</span>
    </Container>
  );
};

export const Container = styled.div`
  width: ${(props) => (props.row ? "69px" : "40px")};
  height: ${(props) => (props.row ? "40px" : "53px")};
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #f2f4fe;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  /* padding: ${(props) =>
    props.row ? "11px 12.5px 10px 16px" : "14px 11.5px 8px 11.5px"}; */

  &:hover {
    background: #cfd7ff;
  }

  span {
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.180556px;
    color: #3a4374;
  }
`;
