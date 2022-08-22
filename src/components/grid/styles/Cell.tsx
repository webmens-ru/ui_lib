import styled from "styled-components";

export const HeaderCellContainer = styled.div`
  position: sticky;
  top: 0;
  height: 42px;
  display: flex;
  background: #fff;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px -4px;
  z-index: 10;
  & h5 {
    padding: 14px 5px;
    height: 100%;
    max-width: calc(100% - 30px);
    background: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: grab;
  }
  & > button {
    top: 16px;
    right: 20px;
  }
  & > span {
    top: 12px;
    right: 3px;
  }
  &:hover {
    & > button {
      opacity: 1;
    }
    & > span {
      opacity: 1;
    }
  }
`;

export const BodyCellContainer = styled.div`
  position: relative;
  height: 45px;
  min-height: 45px;
  max-height: 45px;
  background: ${({ hover }: { hover: boolean }) =>
    hover && "rgba(194, 197, 202, 0.15)"};
  border-bottom: 1px solid rgb(238, 242, 244);
  font-size: 13px;
`;

export const CellInner = styled.p`
  height: 100%;
  padding: 15px 0 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ImageCell = styled.img`
  max-width: 100%;
  overflow: hidden;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
`

export const FooterCellContainer = styled.div`
  position: sticky;
  bottom: 0;
  min-height: 45px;
  background: #fff;
  box-shadow: rgb(0 0 0 / 10%) 0px -3px 6px -4px;
  & h5 {
    padding: 14px 5px;
    height: 100%;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const FirstHeaderCellContainer = styled(HeaderCellContainer)`
  min-width: 70px;
  justify-content: center;
  z-index: 1;
  & > input {
    margin: 16px 5px;
  }
`;

export const FirstBodyCellContainer = styled(BodyCellContainer)`
  padding-top: 0px;
  display: flex;
  justify-content: center;
  & > input {
    margin: 16px 5px;
  }
`;

export const FirstFooterCellContainer = styled(FooterCellContainer)``;
