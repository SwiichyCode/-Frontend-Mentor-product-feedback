import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 10px;
  padding: 24px 32px 0px 32px;
`;

export const Wrapper = styled.div`
  position: relative;
  border-bottom: 1px solid #e2e3ec;
  li {
    padding-bottom: 32px;
  }
  &:last-child {
    border-bottom: none;
  }

  &:before {
    display: ${({ isReply }) => (isReply ? "block" : "none")};
    content: "";
    position: absolute;
    top: 63px;
    left: 19px;
    width: 1px;
    height: 58%;

    background: #647196;
    mix-blend-mode: normal;
    opacity: 0.1;
  }
`;

export const CommentsCount = styled.span`
  display: block;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: #3a4374;
  margin-bottom: 28px;
`;

export const CommentsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const RepliesList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  li {
    max-width: 621px;
  }
`;
