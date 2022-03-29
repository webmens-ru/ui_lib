import React, { useEffect, useState } from 'react';
import { useColumnData } from '../hooks/column/useColumnData';
import { useCustomContext } from '../store';
import { ColumnContainer } from '../styles';
import { FirstRowCell } from './FirstRowsCell';

export function BufferColumn() {
  const { state } = useCustomContext();
  const { height, body } = useColumnData();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const sumWidth = state.column
      .map((item) => item.width)
      .reduce((acc, width) => acc + width);
    if (sumWidth > document.body.clientWidth) {
      setWidth(document.body.clientWidth - sumWidth);
    }
  }, [state.column]);

  return (
    <ColumnContainer
      style={{
        height,
        width,
      }}
    >
      <FirstRowCell location="header" key="buffer" />
      {body.map((rowItem, index) => (
        <FirstRowCell key={index}>{rowItem}</FirstRowCell>
      ))}
      {!!state.footer.length && <FirstRowCell location="footer" key="footer" />}
    </ColumnContainer>
  );
}
