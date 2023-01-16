import React, { useState } from "react";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFeedbackStore } from "../../stores/feedbackStore";
import { BackLink } from "../../components/common/BackLink";
import { ContainerLayout } from "../../components/layout/ContainerLayout";
import { FormLayout } from "../../components/layout/FormLayout";
import { Input } from "../../components/common/Input";
import { InputGroup } from "../../components/common/InputGroup";
import { Button } from "../../components/common/Button";
import { TextArea } from "../../components/common/Textarea";
import { Select } from "../../components/common/Select";
import * as S from "./styles";

const initialOptions = [
  { name: "Feature", selected: false },
  { name: "UI", selected: false },
  { name: "UX", selected: false },
  { name: "Enhancement", selected: false },
  { name: "Bug", selected: false },
];

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  detail: yup.string().required("Description is required"),
});

export const FeedbackAdd = () => {
  const addFeedback = useFeedbackStore((state) => state.addFeedback);
  const [status, setStatus] = useState(initialOptions);
  const [currentOption, setCurrentOption] = useState(initialOptions[0].name);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(({ title, detail }) => {
    const newFeedback = {
      id: uuidv4(),
      title: title,
      category: currentOption,
      comments: [],
      status: "Pending",
      description: detail,
      upvotes: 0,
    };

    addFeedback(newFeedback);
  });

  return (
    <ContainerLayout>
      <S.Wrapper>
        <BackLink />
        <FormLayout action={"add"} title="Create New Feedback">
          <S.Form onSubmit={onSubmit}>
            {/* Title */}
            <InputGroup
              title="Feedback title"
              subtitle="Add a short, descriptive headline"
            >
              <Input
                name={"title"}
                register={register}
                error={errors.title?.message}
                placeholder="e.g. Please add a dark theme option..."
              />
            </InputGroup>

            {/* Options */}
            <InputGroup title="Update Status" subtitle="Change feedback state">
              <Select
                name={"status"}
                register={register}
                options={status}
                setOptions={setStatus}
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
                error={errors.detail?.message}
              />
            </InputGroup>
            <S.ButtonGroup>
              <Button theme={"secondary"} text="Cancel" mSize={93} />
              <Button
                theme={"primary"}
                text="Add Feedback"
                mSize={144}
                type="submit"
              />
            </S.ButtonGroup>
          </S.Form>
        </FormLayout>
      </S.Wrapper>
    </ContainerLayout>
  );
};
