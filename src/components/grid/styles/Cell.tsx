import styled from "styled-components";

export const HeaderCellContainer = styled.div`
  position: sticky;
  top: 0;
  min-height: 45px;
  display: flex;
  background: #fff;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px -4px;
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
  min-height: 56px;
  padding-top: 12px;
  padding-left: 5px;
  background: ${({ hover }: { hover: boolean }) =>
    hover && "rgba(194, 197, 202, 0.15)"};
  border-bottom: 1px solid rgb(238, 242, 244);
  font-size: 13px;
`;

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
