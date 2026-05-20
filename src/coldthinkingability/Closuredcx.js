// console.log("A");

// setTimeout(() => {
//   console.log("B");

//   Promise.resolve().then(() => {
//     console.log("C");
//   });

//   queueMicrotask(() => {
//     console.log("D");
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log("E");

//   setTimeout(() => {
//     console.log("F");
//   }, 0);
// });

// queueMicrotask(() => {
//   console.log("G");
// });

// console.log("H");

// output - A,H,E,G,B,C,D,F

// function outer() {
//   let count = 0;
//   return () => {
//     count++;
//     console.log(count);
//   };
// }

// const a = outer();
// const b = outer();

// a();
// b();
// a();

// const obj = {
//   name: "Kush",

//   normal: function () {
//     console.log(this.name);
//   },

//   arrow: () => {
//     console.log(this.name);
//   },
// };

// obj.normal();
// obj.arrow();

// const obj1= obj.normal
// obj()

// const obj2 = obj1.arrow
// obj2()

// Kush
// undeinfed

function A() {}

A.prototype.x = 1;

const obj1 = new A();

A.prototype.x = 2;

const obj2 = new A();

console.log(obj1.x);
console.log(obj2.x);
