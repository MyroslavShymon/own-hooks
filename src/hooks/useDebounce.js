import React, { useRef, useCallback } from "react";

export const useDebounce = (callback, delay) => {
  const timer = useRef();

  const debouncedCallback = useCallback(
    (...args) => {
      console.log("debouncedCallback");
      if (timer.current) {
        console.log("clear");
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        console.log("callback");
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
};
