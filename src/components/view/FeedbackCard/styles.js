import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Container = styled.li`
  width: 100%;
  min-height: 151px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  padding: 28px 32px;
  cursor: pointer;

  .left-side {
    display: flex;
    gap: 40px;
  }

  .right-side {
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
    }
  }
`;

export const UpVotes = styled.div`
  width: 40px;
  height: 53px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #f2f4fe;
  border-radius: 10px;

  span {
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.180556px;
    color: #3a4374;
  }
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3a4374;
    margin-bottom: 4px;
  }

  p {
    max-width: 476px;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
    margin-bottom: 12px;
  }
`;

// Create a composant
export const Category = styled.div`
  width: min-content;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: #4661e6;
  text-transform: capitalize;
  background: #f2f4ff;
  border-radius: 10px;
  padding: 5px 17px 6px 16px;
`;
