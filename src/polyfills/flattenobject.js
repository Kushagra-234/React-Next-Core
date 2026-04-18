const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
  f: 4,
};

output = {
  a: 1,
  "b.c": 2,
  "b.d.e": 3,
  f: 4,
};

const flattenObj = (obj) => {
  // typeof se hoga
  // recursively i think
  return flattenViaParent(obj, "");
};

const flattenViaParent = (obj, prefix) => {
  let result = {};
  for (let item in obj) {
    let value = obj[item];

    const newKey = prefix ? `${prefix}.${item}` : item;

    if (typeof value === "object") {
      const nested  = flattenViaParent(value, newKey);
      Object.assign(result,nested)
    } else {
      result[newKey] = value;
    }
  }

  return result
};
