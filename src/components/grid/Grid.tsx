import React, { StrictMode, useCallback, useEffect, useState } from 'react';
import { Column } from './components/Column';
import { FirstColumn } from './components/FirstColumn';
import { ContextProvider, useCustomContext } from './store';
import { GridContainer } from './styles';
import { IGridProps, TColumnItem } from './types';
import { useDragAndDrop } from './hooks/column/useDragAndDrop';
import { useScroll } from './hooks/grid/useScroll';
import { useHorizontalScroll } from './hooks/grid/useHorizontalScroll';
import { BufferColumn } from './components/BufferColumn';

/**
 * @param column
 * @param row
 * @param footer
 * @param {number} height calc(100vh - height)
 * @param {number} minHeight string
 * @param {{title: string}[]} burgerItems array of object with key title
 * @param {boolean} isShowCheckboxes default false
 * @callback columnMutation returns column after change order or width
 * @callback onBurgerItemClick returns dropdown item after click
 * @callback onChangeCheckboxes returns array of rows id
 * @callback onCellClick returns row item after click
 */
export function Grid(props: IGridProps) {
  if (!props.column?.length) return null;

  return (
    <ContextProvider {...props}>
      <ContextWrapper height={props.height} minHeight={props.minHeight} />
    </ContextProvider>
  );
}

function ContextWrapper({ height, minHeight }: { height?: number, minHeight?: string }) {
  const { state, dispatch } = useCustomContext();
  const onScroll = useScroll();

  const sendResultFunc = useCallback(
    (column: TColumnItem[]) => {
      dispatch({ type: 'SET_COLUMN', column });
      state.columnMutation(column);
    },
    [dispatch, state]
  );

  const { draggableItems, setDraggableItems, getDraggableProps } =
    useDragAndDrop(sendResultFunc);

  useEffect(() => {
    setDraggableItems(state.column.filter((item) => item.visible === 1));
  }, [setDraggableItems, state.column]);

  const { ref, leftSpan, rightSpan } = useHorizontalScroll(state.column);

  const [bufferWidth, setBufferWidth] = useState(0);

  useEffect(() => {
    if (draggableItems.length && ref.current) {
      const widthFirstColumn = 70;
      const sumWidth = draggableItems
        .slice()
        .map((item) => item.width)
        .reduce((acc, item) => acc + item) + widthFirstColumn;
      if (sumWidth < ref.current.clientWidth) {
        setBufferWidth(ref.current.clientWidth - sumWidth);
      }
    }
  }, [draggableItems, ref]);

  return (
    <StrictMode>
      <GridContainer
        ref={ref}
        rowHeight={typeof height === 'number' ? height : 0}
        minRowHeight={minHeight}
        onScroll={onScroll}
      >
        <FirstColumn />
        {draggableItems.map((item, index) => (
          <Column item={item} key={index} {...getDraggableProps(item)} />
        ))}
        <BufferColumn width={bufferWidth} key="bufferColumn" />
        {leftSpan}
        {rightSpan}
      </GridContainer>
    </StrictMode>
  );
}
