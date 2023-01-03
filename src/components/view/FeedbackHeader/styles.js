import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #373f68;
  color: #fff;
  border-radius: 10px;
  padding: 14px 16px 14px 24px;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
`;

export const Suggestions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
  }
`;

export const SortUpVotes = styled.div`
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #f2f4fe;

    span {
      font-weight: 700;
      cursor: pointer;
    }
  }
`;
