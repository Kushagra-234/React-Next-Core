// map function syntax
// arr.map((item, i, arr) => {});

import { useCallback, useEffect, useRef } from "react";

Array.prototype.myMap = function (cb) {
  let temp = [];

  for (var i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const nayaProm = new Promise((resolve, reject) => {
  resolve("Hey");
});

nayaProm.then(() => {});

// promisify
function fetchData(callback) {
  setTimeout(() => {
    callback(null, "Data received");
  }, 1000);
}

const promisedFetch = promisify(fetchData);

promisedFetch()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  };
}

// promise.all polyfill

// arrya of promise lega and if one fails then rejct otherwise it reolsves with result

function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let completed = 0;
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((val) => {
          result[index] = val;
          completed++;

          if (completed === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

flatten([1, [2, [3, 4]], 5]);
result = [1, 2, 3, 4];

function flattenArray(arr, depth) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item) && depth > 0) {
      const res = flattenArray(item, depth - 1);
      result.push(...res);
    } else result.push(item);
  }

  return result;
}

const obj = {
  user: {
    name: "Kushagra",
    address: {
      city: "Aligarh",
      pin: 202001,
    },
  },
  age: 25,
};

const res = {
  "user.name": "Kushagra",
  "user.address.city": "Aligarh",
  "user.address.pin": 202001,
  age: 25,
};

function flattenobj(obj) {
  let result = {};
  let parent = "";

  flattenobjwithparent(obj, "", result);

  return result;
}

function flattenobjwithparent(obj, parent, result) {
  for (let item in obj) {
    let value = obj[item];
    const newKey = parent ? `${parent}.${item}` : item;

    if (typeof value !== "object") {
      return (result[item] = value);
    } else {
      flattenobjwithparent(value, newKey, result);
    }
  }
}

function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

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

const useDebounce = (fn, delay) => {
  const timerIdRef = useRef(null);
  const fnRef = useRef(fn);

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const debouncedFn = useCallback(
    (...args) => {
      clearTimeout(timerIdRef.current);

      timerIdRef.current = setTimeout(() => {
        fnRef.current(...args);
      }, delay);
    },
    [delay]
  );

  return debouncedFn;
};

function execute() {
  console.log("hey");
}

const debouncedFn = useDebounce(execute, 100);

Array.prototype.myReduce = function (cb, initialVal) {
  let acc = initialVal !== undefined ? initialVal : this[0];
  let start = initialVal !== undefined ? 0 : 1;

  for (let i = start; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }

  return acc;
};



// inrtnally rtk ek cache key maintain krta hai which is obtained via endpoint and query params 
// selectfrom result me ham specific data rkh skte hai only specific data we can keep jiske change hone se re-render pade otherwise naa pade 
