import { useMemo } from "react";
import { useCustomContext } from "../../store";
import { getHeaderHeight } from "../../utils/getHeight";

export const useColumnData = () => {
  const { state } = useCustomContext();

  const body = useMemo(
    () =>
      state.row.length > 100
        ? state.row.slice(
            state.scrollFactor * state.scrollStep,
            state.scrollFactor * state.scrollStep + 50,
          )
        : state.row,
    [state.row, state.scrollFactor, state.scrollStep],
  );

  const height = useMemo(
    () => getHeaderHeight(body.length),
    [body.length],
  );
  
  return { height, body };
};
