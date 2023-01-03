import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import bgHeader from "../../assets/suggestions/desktop/background-header.png";

export const AsideCardLayout = ({ bgActive, children }) => {
  return <Container bgActive={bgActive}>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 24px;
  border-radius: 10px;
  ${({ bgActive }) =>
    bgActive &&
    `background-image: url(${bgHeader}); background-size: cover; background-position: center;`}
`;

AsideCardLayout.propTypes = {
  bgActive: PropTypes.bool,
  children: PropTypes.node,
};
