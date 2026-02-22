import { useEffect, useState } from "react";

const useDebInputNaya = (inputVal, delay) => {
  const [debouncedVal, setDebouncedVal] = useState("");

  useEffect(() => {
    let timerId;

    timerId = setTimeout(() => {
      setDebouncedVal(inputVal);
    }, delay);

    return () => clearInterval(timerId);
  }, [inputVal]);

  return { debouncedVal };
};

export default useDebInputNaya;
