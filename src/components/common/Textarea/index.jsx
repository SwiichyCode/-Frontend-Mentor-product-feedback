import styled from "styled-components";
import React from "react";

export const TextArea = ({ name, register, ...props }) => {
  return <StyledTextArea {...register(name)} {...props} />;
};

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 96px;
  background: #f7f8fd;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  border: none;
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
