import { useCallback } from "react";

function greet(cb) {
  console.log("Hi");
  cb();
}

greet(() => console.log("Bye"));

function run(cb) {
  return cb;
}

function sayHi() {
  console.log("Hi");
}

run(sayHi)();

// output according to me
// sayHi(){}

function process(cb) {
  console.log("Start");
  setTimeout(() => {
    cb();
  }, 0);
  console.log("End");
}

// process(() => console.log("Callback"));

// start;
// end;
// callback;

// function run(cb) {
//   return cb;
// }

// run(console.log)("Hello");

function createLogger(msg) {
  return function () {
    console.log(msg);
  };
}

const logHi = createLogger("Hi");
logHi();

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const c1 = counter();
c1();
c1();
c1();

//   function outer(x) {
//     return function inner(y) {
//       return x + y;
//     };
//   }

//   const add5 = outer(5);
//   console.log(add5(3));

// function outer() {
//   let count = 0;

//   return function () {
//     count++;
//     return function () {
//       console.log(count);
//     };
//   };
// }

// const fn = outer();

// const a = fn();
// const b = fn();

// a();
// b();

// fn = function () {
//   count = 1;
//   return function () {
//     console.log(count);
//   };
// };

// a = fn();

// a= function (){
//     console.log(2)
// }

// now a()
// output =2

// function outer() {
//   let count = 0;

//   return function () {
//     count++;
//     return function () {
//       console.log(count);
//     };
//   };
// }

// const a = outer();
// const b = outer();

// const x = a();
// const y = b();

// x();
// y();

// a = function () {
//     // yaha count =1
//   count++;

//   return function () {
//     console.log(1);
//   };
// };

// x=a()

// function outer() {
//     let count = 0;

//     return function () {
//       count++;
//       console.log(count);
//     };
//   }

//   const a = outer();
//   const b = outer();

//   a();
//   a();
//   b();
//   a();
//   b();

// function outer() {
//     let count = 0;

//     return function () {
//       count++;
//       return function () {
//         console.log(count);
//       };
//     };
//   }

//   const fn1 = outer();
//   const fn2 = outer();

//   const a = fn1();
//   const b = fn1();
//   const c = fn2();

//   a();
//   b();
//   c();

//  okay so i see this code and think
//  ki
//  const f1=outer()

//  yaani hai f1 hai ab function(){
//     and count is here 1
//     count++
//     return function (){
//         console.log(count)
//     }
//  }

//  than a=f1()

//  than it returns so
//  a= function(){
//     console.log(count) which is 2 kyuki count++ ho gya
//  }

//  now a call than it prints 2 this is concept for a

//  now for b
//  b=f1()

//  yaani hai f1 hai ab function(){
//     and count is here 1
//     count++
//     return function (){
//         console.log(count)
//     }
//  }

//  so b = return function(){
//     console.log(count) which is 2 after count++
//  }

//  b() which prints 2
//  is this right apporach

// function outer() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const f1 = outer();

// // okay so f1=outer()

// so now a= function(){
//     count++;
//     console.log(count)
// }

// so now a()
// after a()=> count=1

// const a = f1(); // ?
// const b = f1(); // ?
// const c = f1(); // ?

// a();
// b();
// c();

// function outer() {
//     let count = 0;

//     return function () {
//       count++;
//       let snapshot = count;
//       return function () {
//         console.log(count, snapshot);
//       };
//     };
//   }

//   const f1 = outer();

//   const a = f1();
//   const b = f1();
//   const c = f1();

//   a();
//   b();
//   c();

// function outer() {
//   let count = 0;

//   return function () {
//     count++;
//     let snapshot = count;

//     return function () {
//       count++;
//       console.log(count, snapshot);
//     };
//   };
// }

// const f1 = outer();
// const a = f1();
// const b = f1();

// a();
// b();

// function outer() {
//   let count = 0;

//   return function () {
//     count++;
//     let snapshot = count;

//     return function () {
//       count++;
//       console.log(count, snapshot);
//     };
//   };
// }

// const f1 = outer();

// const a = f1();
// const b = f1();

// b();
// a();

// function App() {
//   let count = 0;

//   function handleClick() {
//     count++;
//     console.log(count);
//   }

//   return <button onClick={handleClick}>Click</button>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//     setCount(count + 1);
//     console.log(count);
//   }

//   return <button onClick={handleClick}>Click</button>;
// }

// const increment = () => {
//   useCallback(() => {}, []);
// };

// const incrementNew = useCallback(() => {});

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       console.log(count);
//     }, 1000);
//   }, []);

//   return <button onClick={() => setCount(count + 1)}>Click</button>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       console.log(count);
//     }, 1000);
//   }, [count]);

//   return <button onClick={() => setCount(count + 1)}>Click</button>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("effect");
//   }, [count]);

//   console.log("render");

//   return <button onClick={() => setCount(count + 1)}>Click</button>;
// }



// intial render - effect render 
// button click effect 




// function App() {
//     const [count, setCount] = useState(0);
  
//     const handleClick = () => {
//       setTimeout(() => {
//         setCount(count + 1);
//       }, 1000);
//     };
  
//     return <button onClick={handleClick}>Click</button>;
//   }




const newPromise = new Promise(()=>{

})



// middleware is a function which runs when request is about to be completed it sits at intersection of incoming requets and response 




// getStaticPaths 
// it is  used to creaate or prebuild dynamic pages 