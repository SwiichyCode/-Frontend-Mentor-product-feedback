import React from "react";
import styled from "styled-components";
import illustrationEmpty from "../../../assets/suggestions/illustration-empty.svg";
import { Button } from "../../common/Button";
export const MainBoard = () => {
  const currentValue = [];

  return (
    <Container>
      {currentValue.length > 0 ? (
        <ListBoard></ListBoard>
      ) : (
        <EmptyBoard>
          <img src={illustrationEmpty} alt="illustration" />
          <h1>There is no feedback yet.</h1>
          <p>
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
          <Button text="+ Add Feedback" theme={"primary"} mSize={158} />
        </EmptyBoard>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;

const ListBoard = styled.ul``;

const EmptyBoard = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    margin-bottom: 53px;
  }

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.333333px;
    color: #3a4374;
    margin-bottom: 16px;
  }

  p {
    max-width: 410px;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    color: #647196;
    margin-bottom: 48px;
  }
`;
