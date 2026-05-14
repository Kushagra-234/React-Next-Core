import { useMemo } from "react";

function debounce(fn, delay) {
  let timerID;

  return function (...args) {
    clearTimeout(timerID);

    timerID = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function sum(a, b, c) {
  return a + b + c;
}

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else
      return function (...newArgs) {
        return curried(...args, ...newArgs);
      };
  };
}

const [count, setCount] = 0;

handleClick = () => {
  setCount(count + 1);
  console.log(count);
};

const [count, setCount] = 0;

handleClick = () => {
  setCount((prev) => prev + 1);
  console.log(count);
};

const data = {
  name: "kushagra",
  age: 10,
};

const data2 = useMemo(() => {
  name: "Kushagra";
}, []);

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 3; i++) {
  function close(j) {
    setTimeout(() => {
      console.log(j);
    }, 1000);
  }

  close(i);
}

const arr = [1, 2, 3, 4];

const nayaarr = arr.map((item) => {
  return item * 2;
});


Array.prototype.myMap = function(cb,this){
  let result=[]

  for(let i=0;i<this.length;i++){
    result.push(cb(this[i],i,this))
  }

  return result
}
