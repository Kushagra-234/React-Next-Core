import React, { useCallback, useEffect, useRef } from "react";

const RefComponent = () => {
  const initialValue = 1;
  const timerRef = useRef(initialValue);
  console.log(timerRef.current);
  return <div>Hey</div>;
};

export default RefComponent;

// custom hooks
const useThrottle = (fn, delay) => {
  const isThrottled = useRef(false);

  const throttledFunction = useCallback(
    (...args) => {
      if (isThrottled.current) return;
      fn(...args);
      isThrottled.current = true;

      setTimeout(() => {
        isThrottled.current = false;
      }, delay);
    },
    [fn, delay]
  );

  return throttledFunction;
};

const useDebounce = (fn, delay) => {
  const timerRef = useRef(null);

  const debouncedFunction = useCallback(
    (...args) => {
      clearInterval(timerRef.current);

      timerRef.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [fn, delay]
  );

  return debouncedFunction;
};

// previous value nikaal ke do

const usePrevious = (value) => {
  const valueRef = useRef();

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef.current;
};





for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}



for(var i=0;i<3,i++){
  function incrementCount(value){
    setTimeout(()=>{
      console.log(value)
    },0)
  
  }
   incrementCount(i)
}


Array.prototype.myReduce = function (cb, initialValue) {
  // implement
};


let array1= [1,2,3,4]

const arr2= array1.reduce((item,acc)=>{
  return item+acc

})

console.log(arr2)