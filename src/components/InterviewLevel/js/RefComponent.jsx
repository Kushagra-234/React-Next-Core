import React, { useRef } from "react";

const RefComponent = () => {
  const initialValue = 1;
  const timerRef = useRef(initialValue);
  console.log(timerRef.current);
  return <div>Hey</div>;
};

export default RefComponent;
