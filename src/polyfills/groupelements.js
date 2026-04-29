const obj = [
  { key: "Sample 1", data: "Data1" },
  { key: "Sample 1", data: "Data1" },
  { key: "Sample 2", data: "Data2" },
  { key: "Sample 1", data: "Data1" },
  { key: "Sample 3", data: "Data1" },
  { key: "Sample 4", data: "Data1" },
];

const { useRef, useCallback, useEffect } = require("react");

const output = {
  "Sample 1": [
    { key: "Sample 1", data: "Data1" },
    { key: "Sample 1", data: "Data1" },
    { key: "Sample 1", data: "Data1" },
  ],
  "Sample 2": [{ key: "Sample 2", data: "Data2" }],
  "Sample 3": [{ key: "Sample 3", data: "Data1" }],
  "Sample 4": [{ key: "Sample 4", data: "Data1" }],
};

// approach obj pe loop kro and uthao key
// key me daalo

function groupbykeys(obj) {
  let result = {};

  for (item of obj) {
    if (!result[item.key]) {
      result[item.key] = [];
    }
    result[item.key].push(item);
  }

  return result;
}

const arr1 = [1, 2, (3)[(32, 45, 64)]];

const flattenedArr = [1, 2, 3, 32, 45, 64];

function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      const res = flattenArray(item);
      result.push(...res);
    } else {
      result.push(item);
    }
  }

  return result;
}

function computeAccount() {
  function lakhs(n) {
    return n * 100000;
  }
  const croreResult = function crore(n) {
    return n * 10000000;
  };

  const thousandResult = function thousand(n) {
    return n * 1000;
  };

  function value() {
    lakhResult + croreResult + thousandResult;
  }
}

console.log(computeAccount().lakhs(200));

var objNew = {
  helloworld: function () {
    return "hello world " + this.name;
  },
  name: "Hello",
};

var obj2 = {
  helloworld: objNew.helloworld,
  name: "Bye",
};

obj2.helloworld();

// throttle
// api call takes place after fixed interval of time

function throttle(fn, delay) {
  let isThrottled = false;

  return function (...args) {
    if (isThrottled) return;
    fn.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
}

// okay so now we have to implement a custom hook which would include react specifications

// use react functionalities
// return logic maintain react hooks rendering order

const useThrottle = (fn, delay) => {
  const throttledRef = useRef(false);
  const fnRef = useRef(fn);

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const throttledFunction = useCallback(
    (...args) => {
      if (throttledRef.current) return;
      fnRef.current(...args);
      throttledRef.current = true;

      setTimeout(() => {
        throttledRef.current = false;
      }, delay);
    },
    [delay]
  );

  return throttledFunction;
};
