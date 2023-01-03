import React from "react";
import styled from "styled-components";

export const InputGroup = ({ title, subtitle, children }) => {
  return (
    <Container>
      <div className="header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {children}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;

    h2 {
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 20px;
      letter-spacing: -0.194444px;
      color: #3a4374;
    }

    p {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 20px;
      color: #647196;
    }
  }
`;
