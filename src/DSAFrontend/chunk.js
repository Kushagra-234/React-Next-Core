// chunk([1, 2, 3, 4, 5], 1);
// output = [([1], [2], [3], [4], [5])];
// use

const { useState } = require("react");

// chunk([1, 2, 3, 4, 5], 2);
// output = [[1, 2], [3, 4], [5]];

function chunk(arr, size) {
  let result = [];
  const numofArr = Math.ceil(arr.length / size);
  let curCount = 0;
  let newItemArr = [];

  for (let item = 0; item < arr.length; item++) {
    newItemArr.push(arr[item]);

    if (newItemArr.length === size) {
      result.push(newItemArr);
      newItemArr = [];
    }
  }

  if (newItemArr.length > 0) {
    result.push(newItemArr);
  }

  return result;
}

const chunkres = chunk([1, 2, 3, 4, 5], 3);

console.log(chunkres);

function debounce(fn, delay) {
  let timerid;
  return function (...args) {
    if (!timerid) {
      fn.apply(this, args);
    }

    clearInterval(timerid);

    timerid = setTimeout(() => {
      timerid = null;
    }, delay);
  };
}

// first should be considereda nd then beech ke ignore and then aage continue

function leadingDebounce(fn, delay) {
  let timerid;

  return function (...args) {
    let shouldCallLeading = !timerid;

    clearTimeout(timerid);

    timerid = setTimeout(() => {
      if (!shouldCallLeading) {
        fn.apply(this, args);
      }
    }, delay);

    if (shouldCallLeading) {
      fn.apply(this, args);
    }
  };
}

// /dry run
// H,HE
// for H no timer immediate
// timerId for 100 sec

// create  a count function
// count()  1
// count() 2
// count.reset()

// count() 1

function count() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}()


count()


const count = (function(){
    let countVar=0

    count.reset = () =>{
        countVar(0)
    }

    

    return function(){
        countVar++
        return countVar
    }
})()


count()
count.reset()