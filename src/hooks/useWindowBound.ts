import { useRef, useEffect } from "react";

export const useWindowBound = (duration: string = "10px") => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref && ref.current) {
      const { top, right, bottom, left } = ref.current.getBoundingClientRect();

      if (top < 0) {
        ref.current.style.top = duration;
      }
      if (right > window.innerWidth) {
        ref.current.style.right = duration;
      }
      if (bottom > window.innerHeight) {
        ref.current.style.bottom = duration;
      }
      if (left < 0) {
        ref.current.style.left = duration;
      }
    }
  }, [duration]);

  return { ref };
};
