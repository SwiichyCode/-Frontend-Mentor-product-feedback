import React from "react";
import iconArrowUp from "../../../assets/shared/icon-arrow-up.svg";
import iconComments from "../../../assets/shared/icon-comments.svg";
import * as S from "./styles";

export const FeedbackCard = ({ productRequest, activeLink }) => {
  const { id, title, category, comments, description, upvotes } =
    productRequest;

  // Todo refactor semantic html and naming

  return (
    <S.StyledLink to={activeLink ? `${id}` : null}>
      <S.Container>
        <div className="left-side">
          <S.UpVotes>
            <img src={iconArrowUp} alt="icon-arrow-up" />
            <span>{upvotes}</span>
          </S.UpVotes>
          <S.Informations>
            <h1>{title}</h1>
            <p>{description}</p>

            <S.Category>{category}</S.Category>
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
