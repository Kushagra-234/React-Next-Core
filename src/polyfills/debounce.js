function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    const context = this;

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

// after certain period of inactivity request jaati hai to isme ham use kr skte hai setTiemout easy for thrtollte turant jaati hai and fir kuch interval pe jaati rhti hai

// returns a function and then ghuso dekho ki wo !isthrottled nhi hai then fn.apply(this,args) krdo and then isThrottled ko true krdo and then setTimeout me isThrottled false 
function throttle(fn, delay) {
  const isThrottle = false;
  return function (...args) {
    if (!isThrottle) {
      fn.apply(this, args);
      isThrottle = true;

      setTimeout(() => {
        isThrottle = false;
      }, delay);
    }
  };
}
