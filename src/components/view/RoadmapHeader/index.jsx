import React from "react";
import styled from "styled-components";
import { BackLink } from "../../common/BackLink";
import { ButtonLink } from "../../common/ButtonLink";

export const RoadmapHeader = () => {
  return (
    <Header>
      <div className="left-side">
        <BackLink color="#fff" />
        <h1>Roadmap</h1>
      </div>
      <ButtonLink
        linkTo={"/new-feedback"}
        text={"+ Add Feedback"}
        theme={"primary"}
        mSize={158}
      />
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #373f68;
  border-radius: 10px;
  padding: 27px 40px 27px 32px;

  .left-side {
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: #fff;

    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      letter-spacing: -0.333333px;
    }
  }
`;
