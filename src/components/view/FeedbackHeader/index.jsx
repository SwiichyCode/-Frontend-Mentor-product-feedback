import React from "react";
import { ButtonLink } from "../../common/ButtonLink";
import iconSuggestions from "../../../assets/suggestions/icon-suggestions.svg";
import iconDown from "../../../assets/shared/icon-arrow-down.svg";
import * as S from "./styles";

export const FeedbackHeader = () => {
  return (
    <S.Container>
      <S.LeftSide>
        <S.Suggestions>
          <img src={iconSuggestions} alt="icon-suggestions" />
          <h1>0 Suggestions</h1>
        </S.Suggestions>
        <S.SortUpVotes>
          <p>
            Sort by:{" "}
            <span>
              Most Upvotes <img src={iconDown} alt="icon-down" />
            </span>
          </p>
        </S.SortUpVotes>
      </S.LeftSide>
      <ButtonLink
        text="+ Add Feedback"
        theme={"primary"}
        mSize={158}
        activeLink
        linkTo="new-feedback"
      />
    </S.Container>
  );
};
