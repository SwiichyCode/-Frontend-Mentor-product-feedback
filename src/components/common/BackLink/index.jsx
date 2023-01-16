import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import iconArrowLeft from "../../../assets/shared/icon-arrow-left.svg";

export const BackLink = ({ color }) => {
  return (
    <StyledLink to={"/"} color={color}>
      <img src={iconArrowLeft} alt="icon-arrow-left" />
      Go back
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  color: ${({ color }) => color || "#647196"};
  text-decoration: none;

  img {
    padding-right: 15px;
  }
`;
