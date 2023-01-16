import React, { useEffect } from "react";
import useFetch from "use-http";
import { AsideFilter } from "../../components/view/AsideFilter";
import { AsideHeader } from "../../components/view/AsideHeader";
import { AsideRoadmap } from "../../components/view/AsideRoadmap";
import { FeedbackList } from "../../components/view/FeedbackList";
import { FeedbackHeader } from "../../components/view/FeedbackHeader";
import { ContainerLayout } from "../../components/layout/ContainerLayout";
import { useFeedbackStore } from "../../stores/feedbackStore";
import * as S from "./styles";

export const Feedback = () => {
  const { loading, error, data } = useFetch("./src/API/data.json", []);

  const setFeedbackFromApi = useFeedbackStore(
    (state) => state.setFeedbackFromApi
  );

  // Set feedbacks from API
  useEffect(() => {
    if (data) {
      setFeedbackFromApi(data);
    }

    if (error) {
      console.log(error);
    }
  }, [data]);

  return (
    <ContainerLayout>
      <S.Wrapper>
        <S.Aside>
          <AsideHeader />
          <AsideFilter />
          <AsideRoadmap />
        </S.Aside>
        <S.Main>
          <FeedbackHeader />
          <FeedbackList />
        </S.Main>
      </S.Wrapper>
    </ContainerLayout>
  );
};
