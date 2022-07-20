import React, { useCallback } from 'react';
import styled from 'styled-components';
import { CellInner, ImageCell } from '../../styles';

export const useGetSuitableCell = () => {
  const getUndefCell = useCallback(() => {
    return <CellInner></CellInner>;
  }, []);

  const getArrayCell = useCallback((cell: any) => {
    return <CellInner>{cell.map((el: { title: string }) => el.title).join(', ')}</CellInner>;
  }, []);

  const getStringCell = useCallback((cell: any) => {
    return <CellInner>{cell}</CellInner>;
  }, []);

  const getNumberCell = useCallback((cell: any) => {
    return (
      <CellInner>
        {Number(cell).toLocaleString('ru-RU', {
          maximumFractionDigits: 5,
        })}
      </CellInner>
    );
  }, []);

  const getImageCell = useCallback((cell: any) => {
    return <ImageCell src={cell.url} />
  }, [])

  const getDateCell = useCallback((cell: any) => {
    const date = new Date(cell.title);
    const year = date.getFullYear();
    return (
      <CellInner>
        {(cell.format || '')
          .replace('YYYY', `${year}`)
          .replace('YY', `${year % 100}`)
          .replace('MM', `${date.getMonth() + 1}`.padStart(2, '0'))
          .replace('DD', `${date.getDate()}`.padStart(2, '0'))
          .replace('hh', `${date.getHours()}`.padStart(2, '0'))
          .replace('mm', `${date.getMinutes()}`.padStart(2, '0'))
          .replace('ss', `${date.getSeconds()}`.padStart(2, '0'))}
      </CellInner>
    );
  }, []);

  const getOpenPathCell = useCallback((cell: any) => {
    return <BlueCell>{cell.title}</BlueCell>;
  }, []);

  const getObjectCell = useCallback(
    (cell: any) => {
      switch (cell.type) {
        case 'date':
          return getDateCell(cell);
        case 'image':
          return getImageCell(cell);
        case 'openPath':
        case 'openApplication':
        case 'openLink':
          return getOpenPathCell(cell);
        default:
          return getUndefCell();
      }
    },
    [getDateCell, getOpenPathCell, getUndefCell]
  );

  const otherType = useCallback(
    (cell) => {
      switch (typeof cell) {
        case 'string':
          return getStringCell(cell);
        case 'number':
          return getNumberCell(cell);
        case 'object':
          return getObjectCell(cell);
        default:
          return getUndefCell();
      }
    },
    [getNumberCell, getObjectCell, getStringCell, getUndefCell]
  );

  const getCell = useCallback(
    (cell) => {
      if (cell === null || cell === undefined) {
        return getUndefCell();
      }
      if (Array.isArray(cell)) {
        return getArrayCell(cell);
      }
      return otherType(cell);
    },
    [getArrayCell, getUndefCell, otherType]
  );

  return { getCell };
};

const BlueCell = styled.p`
  padding: 15px 0 0 5px;
  color: #3073ca;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 100%;
  cursor: pointer;
`;
