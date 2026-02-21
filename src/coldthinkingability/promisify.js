// 3) promisify(fn) (callback → promise) Callback style function ko promise style bananao. Given callback signature: fn(...args, (err, data) => {}) Example: const readFileP = promisify(readFile); readFileP("a.txt").then(...) i didnt undersyand the question acche se de aur

// Hume ek function banana hai:

// function promisify(fn) { ... }

// Jo callback style function ko promise style me convert kare.

// 🔹 Example Use Case
// const fakeAsyncPromise = promisify(fakeAsync);

// fakeAsyncPromise(3, 4)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Expected:

// Agar success → resolve

// Agar error → reject

// 🔥 Tumhara Task

// promisify(fn) likho jo:

// Koi bhi function fn le

// Usko return kare ek naya function

// Jo internally Promise return kare

// Callback ke err ko reject kare

// Callback ke data ko resolve kare

// ek function ()=>{
// return
// }

// function promisify(fn) {
//   return () => {
//     return new Promise((resolve, reject) => {
//       resolve(fn(...args));
//     });
//   };
// }

// const fn = () => {};

// const nayafunction = promisify(fn);
// nayafunction.then(
//   (res) => console.log(res),
//   (err) => console.log(err)
// );

// fn(...args, (err, data) => {})

function promisify(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      });
    });
  };
}
