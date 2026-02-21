console.log("start");

const p = new Promise((resolve, reject) => {
  console.log("inside promise");
  resolve("done");
});

p.then((res) => {
  console.log(res);
});

console.log("end");


