import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import iconArrowUp from "../../../assets/shared/icon-arrow-up.svg";
import iconComments from "../../../assets/shared/icon-comments.svg";

export const FeedbackCard = ({ productRequest }) => {
  const { id, title, category, comments, description, upvotes } =
    productRequest;

  return (
    <StyledLink to={`${id}`}>
      <Container>
        <div className="left-side">
          <UpVotes>
            <img src={iconArrowUp} alt="icon-arrow-up" />
            <span>{upvotes}</span>
          </UpVotes>
          <Informations>
            <h1>{title}</h1>
            <p>{description}</p>

            <Category>{category}</Category>
          </Informations>
        </div>
        <div className="right-side">
          <img src={iconComments} alt="icon-comments" />
          <span>{comments && comments.length}</span>
        </div>
      </Container>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Container = styled.li`
  width: 100%;
  min-height: 151px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  padding: 28px 32px;
  cursor: pointer;

  .left-side {
    display: flex;
    gap: 40px;
  }

  .right-side {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-weight: 700;
      font-size: 16px;
      line-height: 23px;
      text-align: center;
      letter-spacing: -0.222222px;
      color: #3a4374;
    }
  }
`;

const UpVotes = styled.div`
  width: 40px;
  height: 53px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #f2f4fe;
  border-radius: 10px;

  span {
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.180556px;
    color: #3a4374;
  }
`;

const Informations = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3a4374;
    margin-bottom: 4px;
  }

  p {
    max-width: 476px;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
    margin-bottom: 12px;
  }
`;

const Category = styled.div`
  width: min-content;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: #4661e6;
  text-transform: capitalize;
  background: #f2f4ff;
  border-radius: 10px;
  padding: 5px 17px 6px 16px;
`;
