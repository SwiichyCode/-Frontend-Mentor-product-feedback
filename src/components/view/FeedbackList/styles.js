import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const ListBoard = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const EmptyBoard = styled.div`
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
