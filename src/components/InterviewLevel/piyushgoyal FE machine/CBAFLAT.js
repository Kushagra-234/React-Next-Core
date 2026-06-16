// Input: [1,2,3,[4,5,6,[7,8,[10,11]]],9]

// Output: [1,2,3,4,5,6,7,8,10,11,9]

const flattenArray = (arr) => {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      const res = flattenArray(item);
      result.push(...res);
    } else result.push(item);
  }

  return result;
};

// promise is a object which tells about the eventual completetion of the task

// const taskLedger = new Promise((resolve, reject) => {
//   resolve("hey");
// });

// taskLedger.then((res) => {
//   console.log("hey", res);
// })

let arr = [1, 2, 3, 5];
arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);
