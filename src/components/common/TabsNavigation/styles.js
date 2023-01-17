import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  border-bottom: 1px solid #e6e8f2;
  mix-blend-mode: normal;
  margin-bottom: 24px;
`;

export const Tabs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Tab = styled.div`
  width: 100%;
  height: 55.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f8fd;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.180556px;
  color: #3a4374;
  mix-blend-mode: normal;
  opacity: ${({ active }) => !active && "0.5"};
  text-transform: capitalize;
  border-bottom: ${({ active }) => active && "3px solid"};
  border-color: ${({ theme }) => theme};
  cursor: pointer;
  user-select: none;
`;
