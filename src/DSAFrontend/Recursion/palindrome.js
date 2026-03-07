// const dataResult = new Promise(() => {});

// console.log(dataResult);

// const dataResult2 = dataResult.resolve().then(() => {
//   return "hello";
// });

// console.log(dataResult2);

const dataSet = new Promise((resolve, reject) => {
  resolve("hello");
});

const dataSetResult = dataSet.then((res) => {
  console.log(res);
  return res;
});

// console.log(dataSetResult);

// const dataSetResult2 = dataSetResult.then((res) => {
//   return res;
// });

// console.log(dataSetResult2);
