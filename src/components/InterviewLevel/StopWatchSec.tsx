import React, { useEffect, useState } from "react";

// apporoach render kro stopwatch ko
// useEffect me settimeout se seconds me time nikaalo
// minutes math.floor(time/60)
// seconds =time%60

const StopWatchSec = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setTimeout(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearTimeout(timerId);
  }, [time, isRunning]);

  const minutes = Math.floor(time / 60);
  //   math.floor nearest integer me leke aata hai seconds ko
  const seconds = time % 60;
  //   modulo leke aata hai bache hue seconds ko

  return (
    <div className="w-full flex flex-col">
      <div>Stop-Watch</div>
      <div className="flex gap-3">
        <button
          className="border-2 p-2"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button>
          {minutes}minutes:{seconds}seconds
        </button>
        {/* <button>Stop</button> */}
        <button
          className="border-2 p-2"
          onClick={() => {
            setIsRunning(false);
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatchSec;
