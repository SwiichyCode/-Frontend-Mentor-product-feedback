import styled from "styled-components";

export const ColumnSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ColumnHeader = styled.header``;

export const ColumnTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: #3a4374;
  text-transform: capitalize;
  margin-bottom: 4px;
`;

export const ColumnSubtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #647196;
`;

export const ColumnList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 868px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
