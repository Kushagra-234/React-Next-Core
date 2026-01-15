import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [startWatch, setStartWatch] = useState(false);

  useEffect(() => {
    let timerId: number | undefined;

    if (startWatch) {
      timerId = setTimeout(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [startWatch, time]);

  return (
    <div className="w-full flex gap-4">
      <button onClick={() => setStartWatch(true)}>Start</button>
      <button>{time}</button>
      <button onClick={() => setStartWatch(false)}>Stop</button>
      <button
        onClick={() => {
          setStartWatch(false);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default StopWatch;
