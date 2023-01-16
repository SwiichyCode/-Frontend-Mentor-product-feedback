import styled from "styled-components";
import { Link } from "react-router-dom";
export const Roadmap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: #3a4374;
`;

export const StyledLink = styled(Link)`
  font-weight: 600;
  font-size: 13px;
  color: #4661e6;
  mix-blend-mode: normal;
  opacity: 0.45;
  text-decoration: underline;
  cursor: pointer;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-side {
    display: flex;
    align-items: center;
    gap: 16px;

    h2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      color: #647196;
    }
  }

  span {
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    text-align: right;
    color: #647196;
  }
`;

export const Circle = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme};
`;
