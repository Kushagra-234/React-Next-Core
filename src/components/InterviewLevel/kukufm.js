// : Ek debounce function banao jo search input ke liye use ho. Extra requirement: immediate first call support kare (leading edge).

// js
// // Test cases
// const log = debounce((query) => console.log(`Searching: ${query}`), 300, true);
// log("a"); // Immediate call
// log("ab");
// log("abc"); // Sirf yahi call hoga after 300ms

// debounce ek callback funcion le rha hai

// const debounce = (fn, delay, immediate = true) => {
//   let timerId;

//   if (immediate) {
//     fn.apply(this, args);
//   }

//   return function (...args) {
//     clearTimeout(timerId);

//     timerId = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// };

function debounce(callbackfn, delay, leading = true) {
  let timerId;

  return function (...args) {
    if (!timerId && leading) {
      callbackfn.apply(this, args);
    }
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      timerId(null);
    }, delay);
  };
}
