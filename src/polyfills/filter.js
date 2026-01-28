// filter ka function
arr.filter((items, i, arr) => {});

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (var i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp
};
