import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: var(--medium-grey);
  }

  ul {
    top: calc(48px + 16px);
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
    border-radius: 10px;

    option {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      color: #647196;
      cursor: pointer;
      height: 48px;
      border-bottom: 1px solid #e2e3ea;
      padding: 0 24px;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        color: #ad1fea;
      }
    }
  }
`;

export const CustomSelect = styled.button`
  position: relative;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background: #f7f8fd;
  padding: 0 24px;
  cursor: pointer;
  border: none;

  &:focus {
    outline: 1px solid #4661e6;
  }

  span {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #3a4374;
  }
`;
