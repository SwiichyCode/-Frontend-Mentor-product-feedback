import React from "react";
import * as S from "./styles";
import { FeedbackCommentsCard } from "../FeedbackCommentsCard";

export const FeedbackComments = ({ comments }) => {
  console.log(comments);

  // Create CommentCard component
  return (
    <S.Container>
      <S.CommentsCount>{comments.length} Comments</S.CommentsCount>
      <S.CommentsList>
        {comments.map((comment) => {
          return (
            <S.Wrapper isReply={comment.replies}>
              <FeedbackCommentsCard item={comment} />
              {comment.replies && comment.replies.length > 0 && (
                <S.RepliesList>
                  {comment.replies.map((reply) => {
                    return <FeedbackCommentsCard item={reply} />;
                  })}
                </S.RepliesList>
              )}
            </S.Wrapper>
          );
        })}
      </S.CommentsList>
    </S.Container>
  );
};
