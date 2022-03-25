import React from "react";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { TRowItem } from "../../types";

export const useSortForColumn = (
  row: TRowItem[],
  code: string,
  callbackForResult: (row: TRowItem[]) => void,
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
    const collator = new Intl.Collator();
    switch (typeof row[0][code]) {
      case "string":
        proxyCallback(
          row.slice().sort((a, b) => collator.compare(a[code], b[code])),
        );
        break;
      case "number":
        proxyCallback(
          row.slice().sort((a, b) => Number(a[code]) - Number(b[code])),
        );
        break;
      case "object":
        switch (typeof row[0][code].title) {
          case "string":
            proxyCallback(
              row
                .slice()
                .sort((a, b) => collator.compare(a[code].title, b[code].title)),
            );
            break;
          case "number":
            proxyCallback(
              row
                .slice()
                .sort((a, b) => Number(a[code].title) - Number(b[code].title)),
            );
            break;
        }
        break;
      default:
        console.error("Unsorted values");
    }
  }, [code, callbackForResult, row, isReverse]);
  
  const sortBtn = (
    <Button isReverse={isReverse} onClick={sortForColumn}></Button>
  );
  return { sortBtn };
};

const Button = styled.button`
  position: absolute;
  width: 7px;
  height: 7px;
  border-left: 1px solid #c9c9c9;
  border-bottom: 1px solid #c9c9c9;
  transform: rotate(
    ${({ isReverse }: { isReverse: boolean }) =>
      isReverse ? "135deg" : "-45deg"}
  );
  opacity: 0;
  transition: all 300ms;
  cursor: pointer;
  &:hover {
    border-left: 1px solid #acacac;
    border-bottom: 1px solid #acacac;
  }
`;
