// apply aur call me farq sirf itna ki ye args as a array leta

Function.prototype.myApply = function (context = {}, args) {
  if (typeof this !== "function") {
    throw new Error("this isnt callable");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("not an valid array");
  }

  context.fn = this;
  return context.fn(...args);
};
