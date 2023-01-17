import React from "react";
import styled from "styled-components";
import iconComments from "../../../assets/shared/icon-comments.svg";

export const Badge = ({ comments }) => {
  return (
    <Container comments={comments}>
      <img src={iconComments} alt="icon-comments" />
      <span>{comments ? comments.length : 0}</span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.222222px;
    color: #3a4374;
    /* background: ${(props) => props.theme.colors.blue}; */
    opacity: ${(props) => (props.comments ? 1 : 0.5)};
  }
`;
