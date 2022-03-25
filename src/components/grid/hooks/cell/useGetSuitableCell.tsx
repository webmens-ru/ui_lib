import React, { useCallback } from "react";
import { useCustomContext } from "../../store";

export const useGetSuitableCell = () => {
  const getUndefCell = useCallback(() => {
    return <p></p>;
  }, []);

  const getArrayCell = useCallback((cell: any) => {
    return <p>{cell.map((el: { title: string }) => el.title).join(", ")}</p>;
  }, []);

  const getStringCell = useCallback((cell: any) => {
    return <p>{cell}</p>;
  }, []);

  const getNumberCell = useCallback((cell: any) => {
    return (
      <p>
        {Number(cell).toLocaleString("ru-RU", {
          maximumFractionDigits: 5,
        })}
      </p>
    );
  }, []);

  const getDateCell = useCallback((cell: any) => {
    const date = new Date(cell.title);
    const year = date.getFullYear();
    return (
      <p>
        {(cell.format || "")
          .replace("YYYY", `${year}`)
          .replace("YY", `${year % 100}`)
          .replace("MM", `${date.getMonth() + 1}`.padStart(2, "0"))
          .replace("DD", `${date.getDate()}`.padStart(2, "0"))
          .replace("hh", `${date.getHours()}`.padStart(2, "0"))
          .replace("mm", `${date.getMinutes()}`.padStart(2, "0"))
          .replace("ss", `${date.getSeconds()}`.padStart(2, "0"))}
      </p>
    );
  }, []);

  const { state } = useCustomContext();

  const getOpenPathCell = useCallback(
    (cell: any) => {
      return (
        <p
          style={{ color: "#3073ca", cursor: "pointer" }}
          onClick={() => state.onCellClick(cell)}
        >
          {cell.title}
        </p>
      );
    },
    [state],
  );

  const getObjectCell = useCallback(
    (cell: any) => {
      switch (cell.type) {
        case "date":
          return getDateCell(cell);
        case "openPath":
          return getOpenPathCell(cell);
        default:
          return getUndefCell();
      }
    },
    [getDateCell, getOpenPathCell, getUndefCell],
  );

  const otherType = useCallback(
    (cell) => {
      switch (typeof cell) {
        case "string":
          return getStringCell(cell);
        case "number":
          return getNumberCell(cell);
        case "object":
          return getObjectCell(cell);
        default:
          return getUndefCell();
      }
    },
    [getNumberCell, getObjectCell, getStringCell, getUndefCell],
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
    [getArrayCell, getUndefCell, otherType],
  );

  return { getCell };
};
