import React, { useState } from "react";
import styled from "styled-components";
import { AsideCardLayout } from "../../layout/AsideCardLayout";
import { ButtonFilter } from "../../common/ButtonFilter";

export const AsideFilter = () => {
  const initialValue = [
    { text: "All", active: false },
    { text: "UI", active: false },
    { text: "UX", active: false },
    { text: "Enhancement", active: false },
    { text: "Bug", active: false },
    { text: "Feature", active: false },
  ];

  const [items, setItems] = useState(initialValue);

  const handleClick = (text) => {
    const newItems = items.map((item) => {
      if (item.text === text) {
        return { ...item, active: !item.active };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <AsideCardLayout>
      <Container>
        {items.map((item) => {
          return <ButtonFilter item={item} handleClick={handleClick} />;
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
