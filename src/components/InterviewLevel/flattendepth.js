const { useRef, useCallback } = require("react");

function flatten(value, depth) {
  let result = [];

  for (let item of value) {
    if (Array.isArray(item) && depth > 0) {
      let itemNew = flatten(item, depth - 1);

      result.push(...itemNew);
    } else {
      result.push(item);
    }
  }

  return result;
}

// trailing

function debounce(func, wait) {
  // debounce characterstck function call heppens after certain period of inactiviyt
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

// pehla call on the spot

function debounce(func, wait) {
  let isDebounced = true;

  return function (...args) {
    if (isDebounced) {
      func.apply(this, args);
    }

    isDebounced = false;

    timerId = setTimeout(() => {
      isDebounced = true;
    }, wait);
  };
}

function throttle(func, wait) {
  // ek specidic period of time ke baad chalega hi
  let isThrottled = true;

  return function (...args) {
    if (!isThrottled) return;
    func.apply(this, args);

    isThrottled = false;

    setTimeout(() => {
      isThrottled = true;
    }, wait);
  };
}

function throttle(func, delay) {
  let isThrottled = true;

  return function (...args) {
    if (!isThrottled) return;

    func.apply(this, args);

    isThrottled = false;

    setTimeout(() => {
      isThrottled = true;
    }, delay);
  };
}

const useThrottle = (func, delay) => {
  const isThrottledRef = useRef(true);
  const funcRef = useRef(func);

  const throttledFunction = useCallback(
    (...args) => {
      if (!isThrottledRef.current) return;

      funcRef.current(...args);

      isThrottledRef.current = false;

      setTimeout(() => {
        isThrottledRef.current = true;
      }, delay);
    },
    [delay]
  );

  return throttledFunction;
};

function MypromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve([]);
    }

    promises.forEach((items, index) => {
      Promise.resolve(items)
        .then((itemRes) => {
          result[index] = itemRes;
          completed++;

          if (completed === promises.length) {
            resolve(result);
          }
        })
        .catch((e) => {
          reject(e);
          // console.log(e);
        });
    });
  });
}




// function currying is a concept of breaking multiple params in single params using funcion chaining and then calling it 

function(a,b,c){
  return a+b+c
}


function add(a){
  return function(b){
    return function(c){
    return a+b+c
    }
  }
}

add(1)(2)(3)
// full applciaiton 


// partial applciaiton 
let addbyone=add(1)
addbyone(2)(3)



// /infinite currying 
function add2(a,b,c,){
  return a+b+c
}

function add3(a){
  return function(b){
   if(b === undefined){
    return a 
   }else {
   return  add3(a+b)
   }
  }
}


add2(1)(2)(3)(4)(5)()



// okay  so 
function subs(a,b,c,d){
  return a+b+c+d
}

curriedFunc = curry(a)(b)(c)(d)
curriedFunc()


function curry(func){
  return function curried  (...args){
    if(args.length >= func.length){
      func(...args)
    }else return function(...next){
      return curried(...args,...next)
    }
  }
}