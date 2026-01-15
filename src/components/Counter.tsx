import React from "react";
import { useCount } from "../customhooks/useCounter";

const Counter = () => {
  const { count, Increment, Decrement } = useCount(5);

  return (
    <div className="w-full flex ">
      <button onClick={Increment}>+</button>
      <div>{count}</div>
      <button onClick={Decrement}>-</button>
    </div>
  );
};

export default Counter;
