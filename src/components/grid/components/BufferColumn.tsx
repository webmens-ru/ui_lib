import React, { useCallback } from 'react';
import { useColumnData } from '../hooks/column/useColumnData';
import { useCustomContext } from '../store';
import {
  BodyCellContainer,
  ColumnContainer,
  HeaderCellContainer,
} from '../styles';
import { Cell } from './Cell';

export function BufferColumn({ width }: { width: number }) {
  const { state, dispatch } = useCustomContext();
  const { height, body } = useColumnData();

  const onMouseEnter = useCallback(
    (hoverId) => {
      dispatch({ type: 'SET_HOVER_ID', hoverId });
    },
    [dispatch]
  );

  return (
    <ColumnContainer
      style={{
        height,
      }}
    >
      <HeaderCellContainer style={{ minWidth: width }} />
      {body.map((rowItem, index) => (
        <BodyCellContainer
          key={'bufferRow' + index}
          hover={rowItem.id === state.hoverId}
          onMouseEnter={() => onMouseEnter(rowItem.id)}
        >
          <p></p>
        </BodyCellContainer>
      ))}
      {!!state.footer.length && (
        <Cell key="bufferFooterIndex" location="footer">
          {null}
        </Cell>
      )}
    </ColumnContainer>
  );
}
