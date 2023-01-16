import React from "react";
import { useFeedbackStore } from "../../../stores/feedbackStore";
import { useFilteredList } from "../../../hooks/useFilteredList";
import { FeedbackCard } from "../FeedbackCard";
import { Button } from "../../common/Button";
import illustrationEmpty from "../../../assets/suggestions/illustration-empty.svg";
import * as S from "./styles";

export const FeedbackList = () => {
  const feedbackList = useFeedbackStore((state) => state.feedbacks);
  const filteredList = useFilteredList();

  return (
    <S.Container>
      {filteredList && !feedbackList.length > 0 ? (
        <S.ListBoard>
          {filteredList.map((productRequest) => (
            <FeedbackCard
              productRequest={productRequest}
              key={productRequest.id}
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
