import React, { useCallback } from 'react';
import { useSortForColumn } from '../hooks/column/useSortForColumn';
import { useCustomContext } from '../store';
import {
  BodyCellContainer,
  FooterCellContainer,
  HeaderCellContainer,
} from '../styles';
import {
  TCell,
  TFooterItem,
  TRowItem,
  THeaderCell,
  TColumnItem,
} from '../types';
import { useChangeColumnWidth } from '../hooks/column/useChangeColumnWidth';
import { useGetSuitableCell } from '../hooks/cell/useGetSuitableCell';

export function Cell({
  children = {},
  location = 'body',
  onClick,
  ...props
}: TCell) {
  const { state, dispatch } = useCustomContext();
  const { getCell } = useGetSuitableCell();

  const onMouseEnter = useCallback(() => {
    dispatch({ type: 'SET_HOVER_ID', hoverId: children?.id });
  }, [children?.id, dispatch]);

  if (location === 'header') {
    return HeaderCell(children, props);
  }
  if (location === 'footer') {
    return FooterCell(children);
  }
  return (
    <BodyCellContainer
      hover={children.id === state.hoverId}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {getCell(children.item)}
    </BodyCellContainer>
  );
}

const HeaderCell = (children: TColumnItem, props: THeaderCell) => {
  const { state, dispatch } = useCustomContext();

  const callbackForResult = (row: TRowItem[]) => {
    dispatch({ type: 'SET_ROW', row });
  };

  const { sortBtn } = useSortForColumn(
    state.row,
    children.code,
    callbackForResult
  );

  const updateWidth = useCallback(
    (width: number) => {
      const column = state.column.map((item) =>
        item.id === children.id ? { ...item, width } : item
      );
      dispatch({ type: 'SET_COLUMN', column });
      state.columnMutation(column);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [children, dispatch, state.column, state.columnMutation]
  );

  const { line, width, popUp } = useChangeColumnWidth(
    children.width,
    updateWidth
  );

  return (
    <HeaderCellContainer style={{ minWidth: width }}>
      <h5 draggable={true} {...props}>
        {children.title}
      </h5>
      {sortBtn}
      {line}
      {popUp}
    </HeaderCellContainer>
  );
};

const FooterCell = (children: TFooterItem) => {
  return (
    <FooterCellContainer>
      <h5>
        {typeof children === 'number'
          ? Number(children).toLocaleString('ru-RU', {
              maximumFractionDigits: 5,
            })
          : children || ''}
      </h5>
    </FooterCellContainer>
  );
};
