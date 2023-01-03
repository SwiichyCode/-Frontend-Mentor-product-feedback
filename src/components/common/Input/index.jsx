import React from "react";
import styled from "styled-components";

export const Input = ({ name, register, error, ...props }) => {
  return (
    <Container>
      <StyledInput {...register(name)} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  background: #f7f8fd;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  border: none;
  padding: 0 24px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 22px;
  color: #3a4374;

  &:focus {
    outline: 1px solid #4661e6;
  }
`;

const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #d73737;
`;
