import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { TColumnItem } from "../../types";
import { timeout } from "../../utils/timeout";

export const useHorizontalScroll = (column: TColumnItem[]) => {
  const ref = useRef<HTMLDivElement>(null);

  const isHorizontalScrollable = useCallback(
    async (ref: React.RefObject<HTMLDivElement>) => {
      await timeout(100);
      setIsShowRightSpan(
        ref && ref.current
          ? ref.current.clientWidth < ref.current.scrollWidth
          : false,
      );
    },
    [],
  );

  const [isShowLeftSpan, setIsShowLeftSpan] = useState<boolean>(false);
  const [isShowRightSpan, setIsShowRightSpan] = useState<boolean>(true);

  useEffect(() => {
    isHorizontalScrollable(ref);
  }, [isHorizontalScrollable, column]);

  const scrollToLeft = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const scroll = setInterval(() => {
        if (ref && ref.current) {
          ref.current.scrollLeft -= 30;
          if (!isShowRightSpan) {
            setIsShowRightSpan(true);
          }
          if (ref.current.scrollLeft === 0) {
            setIsShowLeftSpan(false);
            clearInterval(scroll);
          }
        }
      }, 50);
      e.currentTarget.onmouseleave = () => {
        clearInterval(scroll);
      };
    },
    [isShowRightSpan],
  );

  const scrollToRight = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const scroll = setInterval(() => {
        if (ref && ref.current && isShowRightSpan) {
          ref.current.scrollLeft += 30;
          if (!isShowLeftSpan) {
            setIsShowLeftSpan(true);
          }
          if (
            ref.current.clientWidth + ref.current.scrollLeft ===
            ref.current.scrollWidth
          ) {
            setIsShowRightSpan(false);
            clearInterval(scroll);
          }
        }
      }, 50);
      e.currentTarget.onmouseleave = () => {
        clearInterval(scroll);
      };
    },
    [isShowLeftSpan, isShowRightSpan],
  );

  const leftSpan = useMemo(
    () =>
      isShowLeftSpan ? <LeftSpan onMouseEnter={scrollToLeft}></LeftSpan> : null,
    [isShowLeftSpan, scrollToLeft],
  );
  const rightSpan = useMemo(
    () =>
      isShowRightSpan ? (
        <RightSpan onMouseEnter={scrollToRight}></RightSpan>
      ) : null,
    [isShowRightSpan, scrollToRight],
  );
  return { ref, leftSpan, rightSpan };
};

const LeftSpan = styled.span`
  position: fixed;
  top: 50%;
  left: -50px;
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: 2;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 52px;
    left: 60px;
    width: 20px;
    height: 5px;
    background: #ffffff;
    transform: rotate(45deg);
  }
  &::after {
    top: 42px;
    transform: rotate(-45deg);
  }
`;

const RightSpan = styled(LeftSpan)`
  left: auto;
  right: -50px;
  transform: rotate(180deg);
`;
