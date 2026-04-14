import React, { useEffect, useState } from "react";

const StopTimerWatch = () => {
  const [time, setTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning) {
      console.log(time);
      timerId = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(timerId);
            return 0;
          } else return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timerId);
  });

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(Math.floor(time % 60)).padStart(2, "0");

  return (
    <div className="h-full w-full flex flex-col gap-5 justify-center items-center">
      <h3>Stopwatch</h3>
      <div className="flex gap-5">
        <button onClick={() => setIsRunning(true)} className="border px-2">
          Start
        </button>
        <div>
          {minutes}:{seconds}
        </div>
        <button onClick={() => setIsRunning(false)} className="border px-2">
          End
        </button>
      </div>
    </div>
  );
};

export default StopTimerWatch;
