import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: min-content;
  max-width: calc(255px + 825px + 30px);
  display: flex;
  gap: 30px;
  /* padding-top: 92px;
  padding-bottom: 92px; */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Main = styled.main`
  width: 100%;
  max-width: 825px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
