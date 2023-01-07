import styled, { createGlobalStyle } from "styled-components";

export const GridStyle = createGlobalStyle`
  .wm-grid {
    font-family: "Open Sans";
    border: 0;

    scroll-behavior: smooth;
    user-select: auto;
    cursor: default;

    .rdg-header-row {
      .cell-action {
        display: flex;

        .wm-icon {
          cursor: pointer;
          &:hover {
            background-color: #525c68;
          }
        }
      }
      .rdg-cell {
        font-weight: normal;
        font-size: 14px;
        margin: 0;

        &:nth-child(2) {
          z-index: 100;
        }
      }
    }

    .rdg-row {
      &:hover .rdg-cell {
        background: #f6f8f9;
      }

      .rdg-cell:nth-child(2) {
        z-index: 99;
      }
    }

    .rdg-cell {
      border: 0;
      border-bottom: 1px solid #edeef0;
      background: #ffffff;
      color: #535c69;
      font-size: 13px;

      &[aria-selected="true"] {
        outline: none;
      }

      &.rdg-cell-resizable {
        &:hover {
          &:after {
            opacity: 1;
          }
        }
        &::after {
          position: absolute;
          top: 50%;
          right: 4px;
          margin-top: -13px;
          width: 10px;
          height: 26px;
          opacity: 0;
          border-right: 1px solid rgba(0,0,0,.1);
          transition: opacity 200ms;
        }
      }
    }
  }
`

export const GridContainer = styled.div`
  position: relative;
  overflow: hidden;
`

export const LeftSideArrow = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -50px;
  margin: auto 0;
  width: 100px;
  height: 100px;
  background: rgba(0,0,0,0.1);
  border-radius: 50%;
  z-index: 2;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 52px;
    left: 60px;
    width: 20px;
    height: 5px;
    background: #ffffff;
    transform: rotate(45deg);
  }
  &::after {
    top: 42px;
    transform: rotate(-45deg);
  }
`;

export const RightSideArrow = styled(LeftSideArrow)`
  left: auto;
  right: -50px;
  transform: rotate(180deg);
`;

export const LockIcon = styled.img.attrs({ alt: "", width: 16 })`
  position: absolute;
  right: 10px;
  
  opacity: .5;
  transition: opacity 200ms;
  cursor: copy;

  &:hover {
    opacity: 1 !important;
  }
`
