import React, { useCallback, useReducer, useEffect } from "react";
import styled from "styled-components";

export const useChangeColumnWidth = (
  initialWidth: number,
  updateWidth: (num: number) => void,
) => {
  const [state, dispatch] = useReducer(reducer, initialWidth, init);

  const onMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (state.isMouseDown) {
      const shift = -state.startX + e.clientX;
      if (state.width + shift > 100) {
        dispatch({
          type: "mouseMove",
          x: e.clientX,
          width: state.width + shift,
        });
      }
    }
  };

  const onMouseUp = useCallback(() => {
    if (state.isMouseDown) {
      updateWidth(state.width);
    }
    dispatch({ type: "mouseUp" });
  }, [state.isMouseDown, state.width, updateWidth]);

  useEffect(() => {
    document.body.addEventListener("mouseup", onMouseUp);
    return () => {
      document.body.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseUp]);

  const line = (
    <Line
      draggable={false}
      onMouseDown={(e) => dispatch({ type: "mouseDown", x: e.clientX })}
      onMouseMove={onMouseMove}
    />
  );
  return { line, width: state.width };
};

const init = (initialWidth: number): State => {
  return {
    isMouseDown: false,
    startX: 0,
    width: initialWidth,
  };
};

type State = {
  isMouseDown: boolean;
  startX: number;
  width: number;
};

type Action =
  | {
      type: "mouseDown";
      x: number;
    }
  | {
      type: "mouseMove";
      x: number;
      width: number;
    }
  | {
      type: "mouseUp";
    };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "mouseDown":
      return {
        ...state,
        isMouseDown: true,
        startX: action.x,
      };
    case "mouseMove":
      return {
        ...state,
        startX: action.x,
        width: action.width,
      };
    case "mouseUp":
      return {
        ...state,
        isMouseDown: false,
      };
    default:
      return state;
  }
};

const Line = styled.span`
  position: absolute;
  width: 10px;
  height: 20px;
  cursor: col-resize;
  opacity: 0;
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 4px;
    width: 2px;
    height: 100%;
    background: #c9c9c9;
  }
`;
