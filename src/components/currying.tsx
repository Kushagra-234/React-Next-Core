// function currying ek aisa concept hai jisme ek function jisme multiple args hote hai use tod ke ham aisa function bnate hai
// jo single single args le and call ho function chahinign se
function New(a, b, c, d) {}

function NewHUN(a) {
  return function Ui(b) {
    return function PI(c) {
      return function LP(d) {
        return a + b + c + d;
      };
    };
  };
}

// used for partial calling 
// api call me ek cheez fix krne ke liye 

NewHUN(1)(2)(3)(4);

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

function curryNew(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

// curry function return karta hai curried function jisme ...args (array of arguments) aate hain.
// Agar args.length >= fn.length ho jaata hai to original fn(...args) call ho jaata hai.
// Nahi to ek aur function return hota hai jo next arguments leta hai aur unko pehle wale args ke saath jod kar curried ko dubara call karta hai.

function CurryNew2(fn) {
  return function currying(...args) {
    if (fn.length <= args.length) {
      return fn(...args);
    } else {
      return function (...newArgs) {
        return currying(...args, ...newArgs);
      };
    }
  };
}


