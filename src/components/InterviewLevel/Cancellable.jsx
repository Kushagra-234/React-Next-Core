// Implement a function cancellableInterval that behaves like setInterval, but returns a function that can be called to cancel the interval.
import { useState } from "react";

function cancellableInterval(cb, delay) {
  const [delayMs, setDelayMs] = useState(delay);
  setInterval(() => {
    cb();
  }, delayMs);

  return function (...args) {
    setDelayMs(0);
    clearInterval(delayMs);
  };
}
