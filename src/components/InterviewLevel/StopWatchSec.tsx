import React, { useEffect, useState } from "react";

const StopWatchSec = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    }

    return () => clearTimeout(timerId);
  }, [isRunning, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <h3>STOPWATCH</h3>
      <div className="flex gap-3">
        <button onClick={() => setIsRunning(true)}>start</button>
        <div>
          {minutes}:{seconds}
        </div>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button
          onClick={() => {
            setTime(0);
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatchSec;
