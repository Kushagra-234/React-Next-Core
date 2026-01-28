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
  context.fn(...args)
};
