import styled from "styled-components";

export const GridContainer = styled.div`
  position: relative;
  height: calc(
    100vh - ${({ rowHeight }: { rowHeight: number }) => rowHeight}px
  );
  width: 100%;
  display: flex;
  background: rgb(238, 242, 244);
  overflow: auto;
  & * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #535c69;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
  }
`;
