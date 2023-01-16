import React, { useEffect } from "react";
import styled from "styled-components";
import { AsideCardLayout } from "../../layout/AsideCardLayout";
import { useCategoryStore } from "../../../stores/categoryStore";
import { useActiveStatus } from "../../../hooks/useActiveStatus";
import { Tabs } from "../../common/Tabs";

export const AsideFilter = () => {
  const category = useCategoryStore((state) => state.category);
  const toggleCategory = useCategoryStore((state) => state.toggleCategory);
  const activeStatus = useActiveStatus(category);

  useEffect(() => {
    if (activeStatus.length === 0) {
      toggleCategory(category[0].id);
    }
  }, [category]);

  return (
    <AsideCardLayout>
      <Container>
        {category.map((item) => {
          return <Tabs item={item} toggleCategory={toggleCategory} />;
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
