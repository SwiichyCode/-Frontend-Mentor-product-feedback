import React from "react";
import { Chip } from "../../common/Chip";
import { ButtonVote } from "../../common/ButtonVote";
import { Badge } from "../../common/Badge";
import * as S from "./styles";

export const FeedbackCard = ({ productRequest, activeLink }) => {
  const { id, title, category, comments, description, upvotes } =
    productRequest;

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
        <Badge comments={comments} />
      </S.Container>
    </S.StyledLink>
  );
};
