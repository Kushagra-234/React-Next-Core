// map function syntax
// arr.map((item, i, arr) => {});

Array.prototype.myMap = function (cb) {
  let temp = [];

  for (var i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};
