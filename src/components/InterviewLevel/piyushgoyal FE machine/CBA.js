// call , apply bind are all function borrowing methods which are basically used to explicielty set value of this
// call me args direct apply me args in array and in bind it returns a functiion which can be called later

const obj1 = {
  name: "kushagra",
};

function greet(city) {
  console.log(`${this.name} is a good person and belongs to ${city}`);
}

const a = greet.call(obj1, "BLR");
const b = greet.apply(obj1, ["blr"]);
const c = greet.bind(obj1, "blr");
c();

//
Function.prototype.myCall = function (context, ...args) {
  let fn = this;
  context.tempFn = fn;

  const result = context.tempFn(...args);

  delete context.tempFn;

  return result;
};

Function.prototype.myApply = function (context, args) {
  let fn = this;
  if (!Array.isArray(args)) {
    throw new Error("this is not callable on apply");
  }

  context.tempFn = fn;
  context.tempFn(...args);

  delete context.tempFn;

  return;
};

Function.prototype.myBind = function (context, args) {
  let fn = this;
  context.tempFn = fn;

  const result = () => {
    context.tempFn(...args);
  };

   delete context.tempFn
  return result;
  
};

