import { useEffect, useState } from "react";

const useDeb = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timerId;

    timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    () => clearTimeout(timerId);
  }, [value]);

  return { debouncedValue };
};

export  {useDeb};
