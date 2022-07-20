import styled from 'styled-components';

type GridContainerProps = {
  rowHeight: number,
  minRowHeight?: string;
}

export const GridContainer = styled.div<GridContainerProps>`
  position: relative;
  height: calc(100vh - 185px);
  min-height: ${({minRowHeight})=>minRowHeight};
  width: 100%;
  display: flex;
  background: rgb(238, 242, 244);
  overflow: auto;
  color: #535c69;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
`;
