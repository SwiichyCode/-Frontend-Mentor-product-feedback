import styled from "styled-components";

export const Tabs = ({ item, toggleCategory, ref }) => {
  const { text, active, id } = item;

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      toggleCategory(id);
    }
  };

  return (
    <Container
      active={active}
      onClick={() => toggleCategory(id)}
      onKeyDown={(e) => handlePressEnter(e)}
      ref={ref}
      tabIndex={0}
    >
      {text}
    </Container>
  );
};

export const Container = styled.div`
  width: min-content;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: ${({ active }) => (active ? "#FFFFFF" : "#4661e6")};
  text-transform: capitalize;
  background: ${({ active }) => (active ? "#4661E6" : "#f2f4ff")};
  border-radius: 10px;
  padding: 5px 17px 6px 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  user-select: none;

  &:hover {
    color: ${({ active }) => (active ? "#FFFFFF" : "#4661e6")};
    background: #cfd7ff;
    background: ${({ active }) => (active ? "#4661E6" : "#cfd7ff")};
  }
`;
