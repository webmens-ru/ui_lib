import styled from "styled-components";

export const BurgerMenuContainer = styled.div`
  position: relative;
  margin-top: 6px;
  width: 34px;
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > span {
    margin: 1px;
    width: 15px;
    height: 2px;
    background: #000;
    opacity: 0.3;
  }
  & > div {
    position: absolute;
    top: 0px;
    left: 45px;
    width: max-content;
    max-width: 200px;
    background: #fff;
    box-shadow: 0 7px 21px rgba(83, 92, 105, 0.3);
    z-index: 10;
    & > button {
      width: 100%;
      height: 36px;
      color: #535c69;
      transition: all 200ms;
      &:hover {
        background: rgba(194, 197, 202, 0.15);
      }
    }
    &:before {
      content: "";
      position: absolute;
      top: 5px;
      left: -10px;
      width: 20px;
      height: 20px;
      background: #fff;
      box-shadow: -5px 10px 10px rgba(83, 92, 105, 0.1);
      transform: rotate(45deg);
      z-index: -1;
    }
  }
`;
