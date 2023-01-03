import React from "react";
import styled from "styled-components";
import { Button } from "../../common/Button";
import iconSuggestions from "../../../assets/suggestions/icon-suggestions.svg";
import iconDown from "../../../assets/shared/icon-arrow-down.svg";
import { ButtonLink } from "../../common/ButtonLink";

export const MainHeader = () => {
  return (
    <Container>
      <LeftSide>
        <div className="suggestions">
          <img src={iconSuggestions} alt="icon-suggestions" />
          <h1>0 Suggestions</h1>
        </div>
        <div className="sortByMostUpvotes">
          <p>
            Sort by:{" "}
            <span>
              Most Upvotes <img src={iconDown} alt="icon-down" />
            </span>
          </p>
        </div>
      </LeftSide>
      <ButtonLink
        text="+ Add Feedback"
        theme={"primary"}
        mSize={158}
        activeLink
        linkTo="new-feedback"
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #373f68;
  color: #fff;
  border-radius: 10px;
  padding: 14px 16px 14px 24px;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;

  .suggestions {
    display: flex;
    align-items: center;
    gap: 16px;

    h1 {
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.25px;
    }
  }

  .sortByMostUpvotes {
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #f2f4fe;

      span {
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
`;
