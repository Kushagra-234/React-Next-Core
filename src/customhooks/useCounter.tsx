import React, { useState } from "react";
// return increment ,decrement,count

export const useCount = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  function Increment() {
    return setCount((prev) => prev + 1);
  }

  function Decrement() {
    return setCount((prev) => prev - 1);
  }

  return { count, Increment, Decrement };
};


