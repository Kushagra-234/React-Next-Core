let obj = {
  a: 1,
  b: { c: 3 }, // new reference
};

const objDeeped = structuredClone(obj);

objDeeped.b.c = 2;

console.log(obj.b.c);

function structuredCloneMapped(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  //   /array
  if (Array.isArray(obj)) {
    obj.map((item) => structuredCloneMapped(item));
  }

  //   if objedct
  let clone = {};
  for (let key in obj) {
    clone[key] = structuredCloneMapped(obj[key]);
  }
}

// nhi lets dry run this

// let obj = {
//     a: 1,
//     b: { c: 3 }, // new reference
//   };

// obj gets passed in this func /
// not null and type is also object and not array
// so now this line runs let key in obj
// so clone[a]= structuredCloneMapped(obj[a])
// so it is clone[a]=1
// right so now clone = {a:1}
// loop goes on now key is b
// clone[b]=structuredCloneMapped(obj[b])  which is {c:3}
// so now clone[b]= structuredCloneMapped({c:3}) right ""

// TypeScript mein generic useFetch utility banao jo loading/success/error states return kare with discriminated union.

// ts
// type FetchState<T> =
//   | { status: 'loading' }
//   | { status: 'success', data: T }
//   | { status: 'error', error: string };

// const result = useFetch<User[]>('/api/users');
// if (result.status === 'success') {
//   result.data.map(user => user.name); // Type safe ✅
// }

const useFetch = async (endPoint) => {
  try {
    let res = await fetch(endPoint);
    let jsonFIeld = await res.json();
    if (res.ok) {
      return {
        status: "success",
        data: jsonFIeld,
      };
    }
  } catch (e) {
    return { status: "error", error: e };
  }

  //  else return { status: "error", error: "" };/
};

const throttle = (fn, delay) => {
  let isThrottled = false;

  return function (...args) {
    if (isThrottled) return;
    fn.apply(this, args);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
};

const arr = [1, 23, [4, 9, 0, 1, [12, 34, 56]]];

const flattenArray = (arr) => {
  let res = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      res= res.concat(flattenArray(item));
    } else {
        res.push(item)
    }
  }

  return res
};




// pseudo clasess define state of element like hover,focus and pseudo elements target part of element before after 