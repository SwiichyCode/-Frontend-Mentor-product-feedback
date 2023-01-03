import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import iconAdd from "../../assets/shared/icon-new-feedback.svg";
import iconEdit from "../../assets/shared/icon-edit-feedback.svg";

export const FormLayout = ({ action, title, children }) => {
  return (
    <Container action={action}>
      <div className="img-wrapper">
        <img src={action === "add" ? iconAdd : iconEdit} alt="icon-plus" />
      </div>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};

FormLayout.propTypes = {
  children: PropTypes.node,
  action: PropTypes.oneOf(["add", "edit"]),
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 657px;
  background: #fff;
  border-radius: 10px;
  padding: 52px 42px 40px 42px;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.333333px;
    color: #3a4374;
  }

  .img-wrapper {
    position: absolute;
    top: 0%;
    left: 62px;
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #fff;

    img {
      min-width: 56px;
      min-height: 56px;
    }
  }
`;
