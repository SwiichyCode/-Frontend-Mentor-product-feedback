import styled from "styled-components";
import React from "react";

export const TextArea = ({ name, register, error, ...props }) => {
  return (
    <Container>
      <StyledTextArea {...register(name)} error={error} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 96px;
  background: #f7f8fd;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  border: ${({ error }) => (error ? "1px solid #d73737" : "none")};
  padding: 12px 24px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 22px;
  color: #3a4374;
  resize: none;

  &:focus {
    outline: 1px solid #4661e6;
  }

  &::placeholder {
    color: #647196;
  }
`;

const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #d73737;
`;
