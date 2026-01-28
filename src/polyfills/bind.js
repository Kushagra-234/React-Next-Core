// bind function is also a function which helps in function borrowing
// isme kya hai it returns fumctions which can be called later

const obj1 = {
  name: "kushagra",
};

function getName(country) {
  return `${this.name} belongs to ${country}`;
}

const getCountryForName = getName.bind(obj1, "India");

// polyfill

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("this isnt callable fucntion");
  }

  context.fn = this;
  return function (...newArgs) {
    context.fn(...args, newArgs);
  };
};
