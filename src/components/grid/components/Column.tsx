import React from 'react';
import { useColumnData } from '../hooks/column/useColumnData';
import { useCustomContext } from '../store';
import { ColumnContainer } from '../styles';
import { TColumn } from '../types';
import { Cell } from './Cell';

export function Column({ item, ...props }: TColumn) {
  const { state } = useCustomContext();
  const { height, body } = useColumnData();

  return (
    <ColumnContainer
      style={{
        height,
      }}
    >
      <Cell location="header" key={item.code} {...props}>
        {item}
      </Cell>
      {body.map((rowItem) => (
        <Cell key={rowItem.id} onClick={() => state.onCellClick(rowItem[item.code])}>
          {{ item: rowItem[item.code], id: rowItem.id }}
        </Cell>
      ))}
      {!!state.footer.length && (
        <Cell key={item.code + 'footerIndex'} location="footer">
          {item.code in state.footer[0] ? state.footer[0][item.code] : null}
        </Cell>
      )}
    </ColumnContainer>
  );
}
