import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Chip } from "../../common/Chip";
import { ButtonVote } from "../../common/ButtonVote";
import { Badge } from "../../common/Badge";
import { removeSpecialCharacters } from "./utils";
export const RoadmapCard = ({ feedback }) => {
  const { title, description, status, category, upvotes, comments, id } =
    feedback;

  return (
    <Container status={status}>
      <div className="status">
        <div className="dot"></div>
        <h3>{removeSpecialCharacters(status)}</h3>
      </div>
      <div className="details">
        <StyledLink to={id}>{title}</StyledLink>
        <p>{description}</p>
      </div>
      <Chip text={category} />
      <div className="votes">
        <ButtonVote votes={upvotes} row />
        <Badge comments={comments} />
      </div>
    </Container>
  );
};

const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: #3a4374;
  margin-bottom: 4px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #4661e6;
  }
`;

const Container = styled.li`
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  border-top: 6px solid ${(props) => generateTheme(props.status)};
  padding: 31px 32px;

  .status {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${(props) => generateTheme(props.status)};
    }

    h3 {
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      color: #647196;
      text-transform: capitalize;
    }
  }

  .details {
    margin-bottom: 16px;

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      color: #647196;
    }
  }

  .votes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
  }
`;

function generateTheme(status) {
  switch (status) {
    case "planned":
      return "#F49F85";
    case "in-progress":
      return "#AD1FEA";
    case "live":
      return "#62BCFA";
  }
}
