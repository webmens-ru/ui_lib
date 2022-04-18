import React from 'react';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { TRowItem } from '../../types';

export const useSortForColumn = (
  row: TRowItem[],
  code: string,
  callbackForResult: (row: TRowItem[]) => void
) => {
  const [isReverse, setReverse] = useState(false);

  const sortForColumn = useCallback(() => {
    const proxyCallback = (row: TRowItem[]) => {
      if (isReverse) {
        callbackForResult(row.reverse());
      } else {
        callbackForResult(row);
      }
      setReverse(!isReverse);
    };
    switch (typeof row[0][code]) {
      case 'string':
        proxyCallback(row.slice().sort((a, b) => stringSort(a[code], b[code])));
        break;
      case 'number':
        proxyCallback(row.slice().sort((a, b) => numberSort(a[code], b[code])));
        break;
      case 'object':
        const rowItem = row.find((item) => !!item?.title);
        if (rowItem) {
          switch (rowItem.title) {
            case 'string':
              proxyCallback(
                row
                  .slice()
                  .sort((a, b) => stringSort(a[code].title, b[code].title))
              );
              break;
            case 'number':
              proxyCallback(
                row
                  .slice()
                  .sort((a, b) => numberSort(a[code].title, b[code].title))
              );
              break;
          }
        }
        break;
      default:
        console.error('Unsorted values');
    }
  }, [code, callbackForResult, row, isReverse]);

  const sortBtn = (
    <Button isReverse={isReverse} onClick={sortForColumn}></Button>
  );
  return { sortBtn };
};

const Button = styled.button<{ isReverse: boolean }>`
  position: absolute;
  width: 7px;
  height: 12px;
  border-left: 1px solid #c9c9c9;
  border-bottom: 1px solid #c9c9c9;
  transform: rotate(${({ isReverse }) => (isReverse ? '135deg' : '-45deg')});
  opacity: 0;
  transition: all 300ms;
  cursor: pointer;
  &:hover {
    border-left: 1px solid #acacac;
    border-bottom: 1px solid #acacac;
  }
`;

const stringSort = (a: any, b: any) => {
  if (!a) return 1;
  if (!b) return -1;
  const collator = new Intl.Collator();
  return collator.compare(a, b);
};

const numberSort = (a: any, b: any) => {
  if (!a && a !== 0) return 1;
  if (!b && b !== 0) return -1;
  return Number(a) - Number(b);
};
