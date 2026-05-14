// map function syntax
// arr.map((item, i, arr) => {});

Array.prototype.myMap = function (cb) {
  let temp = [];

  for (var i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const nayaProm = new Promise((resolve, reject) => {
  resolve("Hey");
});

nayaProm.then(() => {});

// promisify
function fetchData(callback) {
  setTimeout(() => {
    callback(null, "Data received");
  }, 1000);
}

const promisedFetch = promisify(fetchData);

promisedFetch()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  };
}
