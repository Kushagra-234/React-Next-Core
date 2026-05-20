console.log("A");

setTimeout(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });

  queueMicrotask(() => {
    console.log("D");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("E");

  setTimeout(() => {
    console.log("F");
  }, 0);
});

queueMicrotask(() => {
  console.log("G");
});

console.log("H");



output - A,H,E,G,B,C,D,F