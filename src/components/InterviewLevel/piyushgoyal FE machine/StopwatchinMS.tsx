import React, { useEffect, useState } from "react";

const StopwatchinMS = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (!isRunning) {
      return;
    }

    timerId = setInterval(() => {
      setTime((prev) => prev + 5);
    }, 1);

    return () => clearInterval(timerId);
  }, [isRunning]);

  const ms = String(time % 1000).padStart(3, "0");
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");

  const minutes = String(Math.floor(time / 60000)).padStart(2, "0");
  const hours = String(Math.floor(time / 3600000)).padStart(2, "0");

  return (
    <div className="flex flex-col justify-center w-full items-center gap-5">
      <h3>StopWatch</h3>
      <div className="flex gap-5">
        <button
          className="cursor-pointer border px-2 "
          onClick={() => setIsRunning(true)}
        >
          Start
        </button>
        <div>
          {hours}:{minutes}:{seconds}:{ms}
        </div>
        <button className="border px-2" onClick={() => setIsRunning(false)}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default StopwatchinMS;
