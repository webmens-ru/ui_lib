import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from 'react';
import styled from 'styled-components';

export const useChangeColumnWidth = (
  initialWidth: number,
  updateWidth: (num: number) => void
) => {
  const popUpRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [width, setWidth] = useState(initialWidth);

  const onMouseMove = useCallback(
    function (this: HTMLDivElement, e: MouseEvent) {
      if (isMouseDown) {
        if (width + e.movementX > 100) {
          setWidth(width + e.movementX);
        }
      }
    },
    [isMouseDown, width]
  );

  const onMouseUp = useCallback(() => {
    if (isMouseDown) {
      updateWidth(width);
    }
    setIsMouseDown(false);
  }, [isMouseDown, updateWidth, width]);

  useEffect(() => {
    const popUp = popUpRef.current;
    if (popUp) {
      popUp.addEventListener('mouseup', onMouseUp);
      popUp.addEventListener('mousemove', onMouseMove);
    }

    return () => {
      if (popUp) {
        popUp.removeEventListener('mouseup', onMouseUp);
        popUp.removeEventListener('mousemove', onMouseMove);
      }
    };
  }, [onMouseMove, onMouseUp]);

  const line = useMemo(
    () => <Line draggable={false} onMouseDown={() => setIsMouseDown(true)} />,
    []
  );

  const popUp = useMemo(
    () => isMouseDown && <PopUp ref={popUpRef} onMouseLeave={onMouseUp} />,
    [isMouseDown, onMouseUp]
  );

  return { line, width, popUp };
};

const Line = styled.span`
  position: absolute;
  width: 10px;
  height: 20px;
  cursor: col-resize;
  opacity: 0;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 4px;
    width: 2px;
    height: 100%;
    background: #c9c9c9;
  }
`;

const PopUp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000000;
  background: none;
  border: none;
`;
