import React from "react";
import * as yup from "yup";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToggle } from "../../../hooks/useToggle";
import { Button } from "../../common/Button";
import { TextArea } from "../../common/TextArea";
import * as S from "./styles";

export const FeedbackCommentsCard = ({ item }) => {
  const { id, content, replyingTo, user } = item;
  const [open, setOpen] = useToggle(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const ref = useDetectClickOutside({ onTriggered: () => setOpen(false) });
  const onSubmit = handleSubmit(({ reply }) => {
    console.log(reply);
    setOpen(false);
  });

  return (
    <S.Container key={id}>
      <div className="comment-header">
        <div className="comment-author">
          <img src={user.image} alt="user-picture" />
          <div className="comment-author-info">
            <span className="comment-author-name">{user.name}</span>
            <span className="comment-author-date">@{user.username}</span>
          </div>
        </div>
        <Button
          theme={"default"}
          text={"Reply"}
          mSize={"min-content"}
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prev) => !prev);
          }}
          type="button"
        />
      </div>
      <div className="comment-content">
        <p>
          {replyingTo && <span>@{replyingTo}</span>} {content}
        </p>
      </div>

      {open && (
        <S.ReplyForm onSubmit={onSubmit} ref={ref}>
          <TextArea name={"reply"} register={register} height={80} />
          <Button
            theme={"primary"}
            text={"Post Reply"}
            mSize={117}
            type="submit"
          />
        </S.ReplyForm>
      )}
    </S.Container>
  );
};
