// import { useMemo } from "react";

// //
// useMemo(() => {}, [nums]);

// thinking ye hai ki same function with same args ho tb hame recompute na krna pde value directly answeer mil jae
// apne ko

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const keys = JSON.stringify(args);

    if (cache.has(keys)) {
      return cache.get(keys);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);

    return result;
  };
}
