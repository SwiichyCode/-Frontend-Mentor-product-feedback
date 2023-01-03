import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useFeedbackStore } from "../stores/feedbackStore";

export const FeedbackDetail = () => {
  const { id } = useParams();
  const feedbacks = useFeedbackStore((state) => state.feedbacks);
  const currentProduct = feedbacks.productRequests.filter(
    (item) => item.id === Number(id)
  );

  return (
    <Container>
      {currentProduct.map((item) => {
        return <span>{item.title}</span>;
      })}
    </Container>
  );
};

const Container = styled.div`
  color: red;
`;
