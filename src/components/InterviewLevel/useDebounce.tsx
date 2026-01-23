import { useEffect, useState } from "react";

function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const debouncedSearch = debounce(searchApi, 300);

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timerId;

    timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return debouncedValue;
  }, [[value, delay]]);
};

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn((err, data) => {
        if (err) {
          reject();
        } else resolve(data);
      }, ...args);
    });
  };
}

const promiseNew = promisify(fn);
promiseNew(1, 3, 4).then((data) => {
  console.log(data);
});

// function currring ek aisi process hai jisme ham ek function jo multiple params leta hai uski bajai usko tod lete hai in multiple
// functions which all take single argument

function add(a, b, c) {
  return a + b + c;
}

function add(a) {
  return function (b) {
    return a + b;
  };
}

// fayda ye hai ki mai ek paramter ko lock kr skta hun pehle hi , dont need to again and again call it

const addApi = (baseApi, endpoint, options) => {};

addApi("http://api.com", "/users", { method: "get" });

const apiCaller = (baseURL) => (endPoint) => (options) => fetch("apisomething");

const api = apiCaller("hhtp://dex.com");
api("/users")({ method: "get" });

// currying used in nextjs auth middleware
// sending a prefilled value for something like calling a api call and passinf baseURL from upfront

function add(a, b, c) {
  return a + b + c;
}

const curriedNew = curry(add);

function addNew(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const nayabanda = addNew(a)(b)(c);

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else
      return function (...newArg) {
        return curried(...args, ...newArg);
      };
  };
}

// dry run
// const curriedFunction = curry(add);
// const curried

// step 1
// -> return curried(1)
// so basically step-1 md
// step 2
// currired(1,2)
// step 3
// add(1,2,3)

function curry(fn) {
  return function currired(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return currired(...args, ...nextArgs);
      };
    }
  };
}

function multiply(a, b) {
  return a * b;
}


const multiplyInstanceBindby4= multiply.bind(this,4)

const multiplyInstance=multiplyInstanceBindby4(3)


