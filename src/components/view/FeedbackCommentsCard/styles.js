import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 17px;

  .comment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .comment-author {
      display: flex;
      align-items: center;
      gap: 32px;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      &-info {
        display: flex;
        flex-direction: column;

        & span:first-child {
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.194444px;
          color: #3a4374;
        }

        & span:last-child {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #647196;
        }
      }
    }
  }

  .comment-content {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #647196;
    margin-left: 72px;

    span {
      font-weight: 700;
      color: #ad1fea;
    }
  }
`;

export const ReplyForm = styled.form`
  width: 100%;
  display: flex;
  gap: 16px;
  padding-left: 72px;
`;
