import React from "react";
import styled from "styled-components";
import { AsideCardLayout } from "../../layout/AsideCardLayout";
import { ButtonFilter } from "../../common/ButtonFilter";

export const AsideFilter = () => {
  const items = [
    { text: "All", active: false },
    { text: "UI", active: false },
    { text: "UX", active: false },
    { text: "Enhancement", active: false },
    { text: "Bug", active: false },
    { text: "Feature", active: false },
  ];
  return (
    <AsideCardLayout>
      <Container>
        {items.map((item) => {
          return <ButtonFilter item={item} />;
        })}
      </Container>
    </AsideCardLayout>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
  background: #ffffff;
  border-radius: 10px;
`;
