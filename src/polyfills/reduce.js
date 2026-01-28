// reduce function me ye hota hai ki
// arr.reduce((items, i, arr) => {}, acc);

arr.reduce(() => {
  acc, item, index, arr;
}, initialValue);

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;

  for (var i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }

  return acc;
};
