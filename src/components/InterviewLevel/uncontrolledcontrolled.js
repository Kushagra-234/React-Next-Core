const { useState, useRef } = require("react");

const InputControlled = () => {
  const [inoutVal, setInputVal] = useState("");
  return (
    <input value={inoutVal} onChange={(e) => setInputVal(e.target.value)} />
  );
};

const InputUncontrolled = () => {
  const inputRef = useRef();
  //   const [inputVal, setInputVal] = useState("");
  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return <input ref={inputRef} />;
};

// const nayaobj = {
//   a: { b: { c: 2 } },
// };

// nayaobj2 = {
//   "a.b.c": 2,
// };

// function flattenObj(obj) {
//   let result = {};
//   flattenObjwithParent(obj, "", result);
//   return result;
// }

// function flattenObjwithParent(curObj, parent, result) {
//   for (let key in curObj) {
//     const newKey = parent ? `${parent}.${key}` : key;
//     if (
//       typeof curObj[key] !== "object" ||
//       curObj[key] === "null" ||
//       Array.isArray(curObj[key])
//     ) {
//       result[newKey] = curObj[key];
//     } else {
//       flattenObjwithParent(curObj[key], newKey, result);
//     }
//   }
// }

const nayaobj = {
  a: { b: { c: 2 } },
};

nayaobj2 = {
  "a.b.c": 2,
};

function flattenObj(obj) {
  // nayi string banao a:{b:{c:2}}
  // purane ka track rkho purani string yani parent ka

  let result = {};
  flattenObjHelper(obj, "", result);
  return result;
}

function flattenObjHelper(curObj, parent, result) {
  for (let item in curObj) {
    let value = curObj[item];
    let newKey = parent ? `${parent}.${item}` : item;

    if (typeof value !== "object" || value === null || Array.isArray(value)) {
      result[newKey] = value;
    } else {
      flattenObjHelper(value, newKey, result);
    }
  }
}

const Arr1 = [1, 2, [3, 4], [3, [42, 121]]];
const Arr2 = [1, 2, 3, 4, 3, 42, 121];

function flattenArr(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      const newResult = flattenArr(item);
      result.push(...newResult);
    } else result.push(item);
  }

  return result;
}

// HOC

// a function  takes in a component and returns a component

const withAuth = (wrappedComponent) => {
  return function (...props) {
    const isAuthenticated = false;

    if (!isAuthenticated) {
      return <h2>Login to continue</h2>;
    }

    return <wrappedComponent {...props} />;
  };
};

const Dashboard = () => {
  return <div>Hey</div>;
};

export default withAuth(Dashboard);
