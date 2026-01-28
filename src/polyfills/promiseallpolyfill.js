// promise.all me tumhe pta hai kya hota hai if all resolve than it works otherwise it reject

const arr = [Promise.resolve(1), Promise.resolve(2)];

Promise.all(arr).then((res) => {
  console.log(res);
});

// Promise.myAll = function (promises) {
//     return (this.resolve)
//   let result = [];
//   if (promises.length === 0) {
//     this.resolve(result);
//   }

//   let count = promises.length;

//   promises.foreach((promise,dix)=>{
//     const new Promise((this.resolve))

//   })
// };

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve([]);
    }

    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((res) => {
          results[idx] = res;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
