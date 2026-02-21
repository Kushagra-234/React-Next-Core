// 4) runSeries(tasks) (promise chain)

// tasks array of functions hai, each returns a Promise.

// Example:

// const tasks = [
//   () => delay(100).then(() => "A"),
//   () => delay(50).then(() => "B"),
// ];

// Task: runSeries(tasks) should run one by one (sequential), and return a Promise that resolves to ["A","B"].
// promise.all me sab resolve to resolve wrnareject
// promise.ract me race
// promise.allsettelted me sab resolve

// function runSeries(tasks) {
//   return new Promise((resolve, reject) => {
//     let results;

//     if (tasks.length === 0) {
//       resolve([]);
//     }

//     for (let i = 0; i < tasks.length; i++) {
//       const curIndex = tasks[i];
//       const returnedPromise = new Promise((resolve, reject) => {
//         const resolvedPromise = curIndex.resolve();
//         if (resolvedPromise) {
//           resolvedPromise.then((data) => {
//             results.push(data);
//           },(err)=>{});
//         }
//       });
//     }
//   });
// }

async function runSeries(tasks) {
  const results = [];

  for (let i = 0; i < tasks.length; i++) {
    const taskFn = tasks[i]; // taskFn is a function
    const value = await taskFn(); // wait for its promise
    results.push(value);
  }

  return results;
}
