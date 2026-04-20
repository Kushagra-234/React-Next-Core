import React, { useCallback, useRef } from "react";

const RefComponent = () => {
  const initialValue = 1;
  const timerRef = useRef(initialValue);
  console.log(timerRef.current);
  return <div>Hey</div>;
};

export default RefComponent;

// custom hooks
const useThrottle = (fn, delay) => {
  const isThrottled = useRef(false);

  const throttledFunction = useCallback(
    (...args) => {
      if (isThrottled.current) return;
      fn(...args);
      isThrottled.current = true;

      setTimeout(() => {
        isThrottled.current = false;
      }, delay);
    },
    [fn, delay]
  );

  return throttledFunction;
};

const useDebounce = (fn, delay) => {
  const timerRef = useRef(null);

  const debouncedFunction = useCallback(
    (...args) => {
      clearInterval(timerRef.current);

      timerRef.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [fn, delay]
  );

  return debouncedFunction
};
