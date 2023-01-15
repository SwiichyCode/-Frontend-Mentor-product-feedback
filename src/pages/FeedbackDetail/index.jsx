import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useFeedbackStore } from "../../stores/feedbackStore";
import { ContainerLayout } from "../../components/layout/ContainerLayout";
import { FeedbackCard } from "../../components/view/FeedbackCard";
import { FeedbackComments } from "../../components/view/FeedbackComments";
import { FeebackAddComments } from "../../components/view/FeebackAddComments";
import { BackLink } from "../../components/common/BackLink";
import { Button } from "../../components/common/Button";

export const FeedbackDetail = () => {
  const { id } = useParams();
  const feedbacks = useFeedbackStore((state) => state.feedbacks);
  const currentProduct = feedbacks.productRequests.filter(
    (item) => item.id === Number(id)
  );

  console.log(currentProduct);

  return (
    <ContainerLayout>
      <Container>
        <Navigation>
          <BackLink />
          <Button theme={"edit"} text={"Edit Feedback"} mSize={142} />
        </Navigation>

        {currentProduct.map((item) => {
          return (
            <Wrapper>
              <FeedbackCard productRequest={item} />
              <FeedbackComments comments={item.comments} />
              <FeebackAddComments />
            </Wrapper>
          );
        })}
      </Container>
    </ContainerLayout>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 730px;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
