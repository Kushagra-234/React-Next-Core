// promise.all ka polyfill

// promise.all me  sab resolve to resolve ek bhi reject to reject

Promise.myPromise = function (promises) {
  return new Promise((resolve, reject) => {
    let result: any[] = [];
    let completed = 0;

    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((p, index: any) => {
      Promise.resolve(p)
        .then((res) => {
          result[index] = res;
          completed++;

          if (completed === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let result: any[] = [];
    let completed = 0;

    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((p, index: any) => {
      Promise.resolve(p).then((res) => {
        result[index] = res;
        completed++;

        if (completed === promises.length) {
          return resolve(result);
        }
      }).catch((err)=>{
        reject(err)
      });
    });
  });
};
