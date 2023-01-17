import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { TextArea } from "../../common/TextArea";
import { Button } from "../../common/Button";
// import * as S from "./styles";

export const FeebackAddComments = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [characterCount, setCharacterCount] = useState(254);
  const onSubmit = handleSubmit((comment) => {
    console.log(comment);
  });

  const handleCount = (e) => {
    setCharacterCount(254 - e.target.value.length);
  };

  return (
    <Container onSubmit={onSubmit}>
      <h2>Add Comment</h2>
      {/* <TextArea
        name="comment"
        register={register}
        height={80}
        onChange={(e) => handleCount(e)}
        maxLength={254}
        style={{ minHeight: "90px" }}
      /> */}
      <Wrapper characterCount={characterCount}>
        <span>{characterCount} character left</span>
        <Button
          type="submit"
          theme={"primary"}
          text={"Post Comment"}
          mSize={142}
        />
      </Wrapper>
    </Container>
  );
};

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 10px;
  padding: 24px 32px 32px 34px;

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3a4374;
    margin-bottom: 24px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;

  span {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #647196;
  }
`;
