import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { BackLink } from "../components/common/BackLink";
import { ContainerLayout } from "../components/layout/ContainerLayout";
import { FormLayout } from "../components/layout/FormLayout";
import { Input } from "../components/common/Input";
import { InputGroup } from "../components/common/InputGroup";
import { Button } from "../components/common/Button";
import { TextArea } from "../components/common/Textarea";
import { Select } from "../components/common/Select";
import { useFeedbackStore } from "../stores/feedbackStore";

const initialOptions = [
  { name: "Feature", selected: false },
  { name: "UI", selected: false },
  { name: "UX", selected: false },
  { name: "Enhancement", selected: false },
  { name: "Bug", selected: false },
];

export const NewFeedback = () => {
  const feedbacks = useFeedbackStore((state) => state.feedbacks);
  const addFeedback = useFeedbackStore((state) => state.addFeedback);
  const [options, setOptions] = useState(initialOptions);
  const [currentOption, setCurrentOption] = useState("Select Status");
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = handleSubmit(({ title }) => {
    const newFeedback = {
      id: uuidv4(),
      title: title,
    };

    // addFeedback(newFeedback);
    console.log(newFeedback);
  });

  // console.log(currentOption);

  return (
    <ContainerLayout>
      <Wrapper>
        <BackLink />
        <FormLayout action={"add"} title="Create New Feedback">
          <Form onSubmit={onSubmit}>
            {/* Title */}
            <InputGroup
              title="Feedback title"
              subtitle="Add a short, descriptive headline"
            >
              <Input
                name={"title"}
                register={register}
                placeholder="e.g. Please add a dark theme option..."
              />
            </InputGroup>

            {/* Options */}
            <InputGroup title="Update Status" subtitle="Change feedback state">
              <Select
                // feedbackOptions={feedbackOptions}
                // setFeedbackOptions={setFeedbackOptions}
                options={options}
                setOptions={setOptions}
                currentOption={currentOption}
                setCurrentOption={setCurrentOption}
              />
            </InputGroup>

            {/* Detail */}
            <InputGroup
              title="Feedback Detail"
              subtitle="Include any specific comments on what should be improved, added, etc."
            >
              <TextArea
                name={"detail"}
                register={register}
                placeholder="e.g. It would help people with light sensitivities and who prefer dark mode..."
              />
            </InputGroup>
            <ButtonGroup>
              <Button theme={"secondary"} text="Cancel" mSize={93} />
              <Button
                theme={"primary"}
                text="Add Feedback"
                mSize={144}
                type="submit"
              />
            </ButtonGroup>
          </Form>
        </FormLayout>
      </Wrapper>
    </ContainerLayout>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 540px;
  height: min-content;
  display: flex;
  flex-direction: column;
  padding-top: 92px;
  gap: 68px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 32px;
`;
