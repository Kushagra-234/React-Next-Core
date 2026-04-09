// call is basically a fgunction borrowing mechanism we borrow a fucntion and call it over a object

const obj = {
  name: "kushagra",
};

function getName(country) {
  return `${this.name} country name is ${country}`;
}

const getIt = getName.call(obj, "India");

// now poylfill for call
// idea is it is a protoytpe on function

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("this is callable");
  }

  // object me wo  function ghusedo
  context.fn = this;
  context.fn(...args);
};

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("not a function");
  }

  context.fn = this;
  context.fn(...args);
};

Array.prototype.myreduce = function (cb, initialVal) {
  const acc = initialVal !== undefined ? initialVal : this[0];
  const start = initialVal !== undefined ? 0 : 1;

  for (let i = start; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

function add(a, b, c) {
  return a + b + c;
}

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

add(1)(2)(3)