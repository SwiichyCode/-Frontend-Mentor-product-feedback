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
