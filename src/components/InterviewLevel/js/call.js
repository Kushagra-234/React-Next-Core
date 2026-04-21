// call polyfill

const mary = {
  age: 20,
};

function consAge() {
  console.log("age is", this.age);
}

consAge.call(mary);

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("not callable over function");
  }
 context.fn=this
 context.fn(...args)

};
