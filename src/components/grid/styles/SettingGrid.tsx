import styled from "styled-components";
import gearSvg from "../assets/grid-gear.svg";

export const GearBtn = styled.div`
  position: relative;
  margin-top: 6px;
  width: 34px;
  height: 32px;
  background: url(${gearSvg}) no-repeat center;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 100px;
  left: calc(50vw - 490px);
  padding: 20px;
  width: 980px;
  background: #fff;
  box-shadow: 0 7px 21px rgba(83, 92, 105, 0.3);
  transition: all 200ms;
  & > h2:first-of-type {
    margin-bottom: 20px;
  }
  & > div:first-of-type {
    min-height: 100px;
    padding: 10px 0;
    display: block;
    column-count: 4;
    & > div {
      margin-bottom: 3px;
      break-inside: avoid-column;
    }
  }
  & > div:last-of-type {
    display: flex;
    align-items: center;
    & > div:first-of-type {
      margin-left: 352px;
      display: flex;
      & > button {
        margin-right: 5px;
        width: 120px;
        height: 39px;
        background: rgb(187, 237, 33);
        color: #535c69;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        &:hover {
          background: rgb(203, 231, 119);
        }
      }
      & > button:last-of-type {
        background: none;
        &:hover {
          background: none;
        }
      }
    }
    & > div:last-of-type {
      margin-right: 200px;
      display: flex;
      & > button {
        margin: 0 5px 0 168px;
        width: 85px;
        height: 20px;
        border-bottom: 1px dashed #000;
        color: #000;
        font-size: 13px;
        opacity: 0.3;
      }
      & > button:last-of-type {
        margin: 0;
      }
    }
  }
`;

export const CheckboxBlueContainer = styled.div`
  position: relative;
  padding: 6px 20px;
  width: 230px;
  display: flex;
  background: ${({ checked }: { checked: boolean }) =>
    checked ? "#b3eafc" : "none"};
  border-radius: 2px;
  overflow: hidden;
  &:hover {
    background: #b3eafc;
    & button {
      opacity: 0.5;
    }
  }
  & input[type="checkbox"] {
    position: absolute;
    top: 9px;
    left: 5px;
    padding-top: 5px;
  }
  & label {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    color: #525c69;
  }
`;
