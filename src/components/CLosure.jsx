// const outer = () => {
//   var a = 1;

//   const inner = () => {
//     a++;
//     console.log(a);
//   };

//   return inner;
// };

// const f1 = outer();
// f1();

const outer = () => {
  var a = 5;

  return function inner() {
    return a;
  };
};


const f1=outer()