import { useCallback } from "react";
import { useCustomContext } from "../../store";

export const useScroll = () => {
  const { state, dispatch } = useCustomContext();

  const onScroll = useCallback(
    ({ currentTarget }: React.UIEvent<HTMLDivElement>) => {
      const { scrollTop, scrollHeight, clientHeight } = currentTarget;
      if (state.row.length < 200) {
        return;
      }

      if (scrollHeight - clientHeight - scrollTop < 50) {
        dispatch({
          type: "SET_SCROLL_FACTOR",
          scrollFactor: state.scrollFactor + 1,
        });
        setTimeout(() => {
          currentTarget.scrollTo(0, state.scrollStep * 57 - clientHeight - 105);
        }, 50);
      }

      if (scrollTop < 50 && state.scrollFactor > 0) {
        dispatch({
          type: "SET_SCROLL_FACTOR",
          scrollFactor: state.scrollFactor - 1,
        });
        setTimeout(() => {
          currentTarget.scrollTo(0, state.scrollStep * 57 + 200);
        }, 50);
      }
    },
    [dispatch, state.row.length, state.scrollFactor, state.scrollStep],
  );
  
  return onScroll
};
