// 2) timeout(promise, ms) (Promise wrapper)

// Koi bhi promise do, agar ms ke andar settle ho gaya to same result, warna reject "Timeout" se.

// Examples:

// timeout(fetchData(), 2000)

// timeout(Promise.resolve(1), 10) → resolves 1

// function timeout(promise, ms) {
//   const originalPromise = promise.resolve();
//   const msPromise = setTimeout(() => {
//     promise.reject();
//   }, ms);

//   return Promise.race([originalPromise, msPromise]);
// }

// const promise = new Promise();

// const returnedPromise = timeout(promise, 500);

function timeout(promise, ms) {
  const msPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Timeout");
    }, ms);
  });

  return Promise.race([promise, msPromise]);
}

const RacedPromise = timeout(Promise.resolve(1), 100);

RacedPromise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
