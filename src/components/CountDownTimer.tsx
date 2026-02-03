import React, { useEffect, useState } from "react";

const CountDownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [start, setStart] = useState(false);

  const handleStart = () => {
    const totalTime = minutes * 60 + seconds;

    if (!totalTime) return;
    setTimeRemaining(totalTime);

    setStart(true);
  };

  useEffect(() => {
    if (!start || timeRemaining <= 0) return;
    let timerId;

    timerId = setTimeout(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [start, timeRemaining]);

  const minutesNew = Math.floor(timeRemaining / 60);
  const secondNew = timeRemaining % 60;

  return (
    <div className="flex h-full justify-center items-center flex-col">
      <h3>CountDown</h3>

      <div className="flex gap-2">
        <input
          onChange={(e) => setMinutes(Number(e.target.value))}
          value={minutes}
          className="w-20"
        />
        <input
          onChange={(e) => setSeconds(Number(e.target.value))}
          value={seconds}
          className="w-20"
        />
      </div>

      <div>
        {minutesNew}:{secondNew}
      </div>

      <button onClick={() => handleStart()}>Start</button>
      <button onClick={() => setStart(false)}>Pause</button>
      <button onClick={() => setStart(true)}>Resume</button>
    </div>
  );
};

export default CountDownTimer;
