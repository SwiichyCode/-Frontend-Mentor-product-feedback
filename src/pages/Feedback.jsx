import React from "react";
import styled from "styled-components";
import { AsideFilter } from "../components/view/Aside/AsideFilter";
import { AsideHeader } from "../components/view/Aside/AsideHeader";
import { AsideRoadmap } from "../components/view/Aside/AsideRoadmap";
import { FeedbackList } from "../components/view/Main/FeedbackList";
import { FeedbackHeader } from "../components/view/Main/FeedbackHeader";
import { ContainerLayout } from "../components/layout/ContainerLayout";
import { useFeedbackStore } from "../stores/feedbackStore";
import useFetch from "use-http";
import { useEffect } from "react";

export const Feedback = () => {
  const { loading, error, data } = useFetch("./src/API/data.json", []);
  const feedbacks = useFeedbackStore((state) => state.feedbacks);
  const setFeedbackFromApi = useFeedbackStore(
    (state) => state.setFeedbackFromApi
  );

  console.log(feedbacks);

  // Set feedbacks from API
  useEffect(() => {
    if (data) {
      setFeedbackFromApi(data);
    }
  }, [data]);

  return (
    <ContainerLayout>
      <Wrapper>
        <Aside>
          <AsideHeader />
          <AsideFilter />
          <AsideRoadmap />
        </Aside>
        <Main>
          <FeedbackHeader />
          <FeedbackList />
        </Main>
      </Wrapper>
    </ContainerLayout>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: min-content;
  max-width: calc(255px + 825px + 30px);
  display: flex;
  gap: 30px;
  padding-top: 92px;
`;

const Aside = styled.aside`
  width: 100%;
  max-width: 255px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Main = styled.main`
  width: 100%;
  max-width: 825px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
