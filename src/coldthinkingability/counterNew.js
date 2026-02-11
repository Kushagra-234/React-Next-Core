// ek function createCOunter
//

import { useState } from "react";

function createCounter() {
  const [curval, setCurVal] = useState(0);

  function increment() {
    return setCurVal((prev) => prev + 1);
  }

  function decrement() {
    return setCurVal((prev) => prev - 1);
  }

  function getValue() {
    return curval;
  }

  return { increment, decrement, getValue };
}

const counter1=createCounter()
counter1.increment()
counter1.increment()


// using js 


function createCounterjs(){
    let initialCount = 0;

    function increment(){
        return ininitialCount=initialCount+1

    }

    function decrement(){
        return ininitialCount=initialCount-1

    }

    function getValue(){
        return initialCount
    }

    return {increment,decrement,getValue}
}
