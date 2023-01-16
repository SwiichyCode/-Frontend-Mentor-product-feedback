import React, { useEffect } from "react";
import useFetch from "use-http";
import { FeedbackList } from "../../components/view/FeedbackList";
import { FeedbackHeader } from "../../components/view/FeedbackHeader";
import { ContainerLayout } from "../../components/layout/ContainerLayout";
import { useFeedbackStore } from "../../stores/feedbackStore";
import * as S from "./styles";
import { Aside } from "../../components/view/Aside";

export const Feedback = () => {
  const { loading, error, data } = useFetch("./src/API/data.json", []);

  const setFeedbacks = useFeedbackStore((state) => state.setFeedbackFromApi);

  // Set feedbacks from API
  useEffect(() => {
    if (data) {
      setFeedbacks(data.productRequests);
    } else {
      console.log(error);
    }
  }, [data]);

  return (
    <ContainerLayout>
      <S.Wrapper>
        <Aside />
        <S.Main>
          <FeedbackHeader />
          <FeedbackList />
        </S.Main>
      </S.Wrapper>
    </ContainerLayout>
  );
};
