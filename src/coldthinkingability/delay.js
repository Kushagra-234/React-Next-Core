// 1) delay(ms) (Promise)

// delay(500).then(() => console.log("done")) ko 500ms baad run karna hai.

// Task: delay(ms) implement karo.

// Requirements:

// returns a Promise

// ms ke baad resolve ho

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("delay");
  }, 500);
});

promise.then((res) => {
  console.log(res);
});

function delay(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("delay");
    }, time);
  });
}

const output = delay(500);
output.then((res)=>{
    console.log(res)
})

// console.log(output);
