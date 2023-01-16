import styled from "styled-components";
import { AsideCardLayout } from "../../layout/AsideCardLayout";
import { ButtonFilter } from "../../common/ButtonFilter";
import { useCategoryStore } from "../../../stores/categoryStore";

export const AsideFilter = () => {
  const category = useCategoryStore((state) => state.category);
  const toggleCategory = useCategoryStore((state) => state.toggleCategory);

  return (
    <AsideCardLayout>
      <Container>
        {category.map((item) => {
          return <ButtonFilter item={item} toggleCategory={toggleCategory} />;
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
