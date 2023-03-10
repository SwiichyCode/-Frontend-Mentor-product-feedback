import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "./themes.js";

const handleChildren = (children) => {
  if (children)
    return "display: flex; align-items: center; justify-content: center; gap: 12px;";
};

export const StyledButton = styled(Link)`
  width: 100%; // Default Size
  max-width: ${(props) => `${props.mSize}px` || "97px"}; // Default Size
  height: 40px; // Default Size
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.8rem;
  border-radius: 10px;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${(props) => theme[props.theme].color};
  background-color: ${(props) => theme[props.theme].backgroundColor};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => theme[props.theme].hoverBackgroundColor};
    color: ${(props) => theme[props.theme].hoverColor};
  }
  ${(props) => handleChildren(props.children)};
  &:focus {
    outline: ${(props) => theme[props.theme].focus};
  }
  @media (min-width: 768px) {
    max-width: ${(props) => props.mSize || "123px"}; // Default Size
    height: 44px;
    font-weight: 1.6rem;
    border-radius: 8px;
  }
`;
