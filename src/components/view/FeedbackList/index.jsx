import React from "react";
import { useFeedbackStore } from "../../../stores/feedbackStore";
import { useFilteredFeedback } from "../../../hooks/useFilteredFeedback";
import { FeedbackCard } from "../FeedbackCard";
import { Button } from "../../common/Button";
import illustrationEmpty from "../../../assets/suggestions/illustration-empty.svg";
import * as S from "./styles";

export const FeedbackList = () => {
  const feedbacks = useFeedbackStore((state) => state.feedbacks);
  const filteredFeedbacks = useFilteredFeedback();

  return (
    <S.Container>
      {filteredFeedbacks && feedbacks.length > 0 ? (
        <S.ListBoard>
          {filteredFeedbacks.map((feedback) => (
            <FeedbackCard
              productRequest={feedback}
              key={feedback.id}
              activeLink
            />
          ))}
        </S.ListBoard>
      ) : (
        <S.EmptyBoard>
          <img src={illustrationEmpty} alt="illustration" />
          <h1>There is no feedback yet.</h1>
          <p>
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
          <Button text="+ Add Feedback" theme={"primary"} mSize={158} />
        </S.EmptyBoard>
      )}
    </S.Container>
  );
};
