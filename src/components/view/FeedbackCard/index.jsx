import React from "react";
import { Chip } from "../../common/Chip";
import iconArrowUp from "../../../assets/shared/icon-arrow-up.svg";
import iconComments from "../../../assets/shared/icon-comments.svg";
import * as S from "./styles";
import { ButtonVote } from "../../common/ButtonVote";

export const FeedbackCard = ({ productRequest, activeLink }) => {
  const { id, title, category, comments, description, upvotes } =
    productRequest;

  // Todo refactor semantic html and naming

  return (
    <S.StyledLink to={activeLink ? `${id}` : null}>
      <S.Container>
        <div className="left-side">
          <ButtonVote votes={upvotes} />
          <S.Informations>
            <h1>{title}</h1>
            <p>{description}</p>

            <Chip text={category} />
          </S.Informations>
        </div>
        <div className="right-side">
          <img src={iconComments} alt="icon-comments" />
          <span>{comments && comments.length}</span>
        </div>
      </S.Container>
    </S.StyledLink>
  );
};
