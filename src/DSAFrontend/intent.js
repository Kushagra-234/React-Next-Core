const { stripVTControlCharacters } = require("node:util");

let items = [
  { color: "red", type: "tv", age: 18 },
  { color: "silver", type: "phone", age: 20 },
  { color: "blue", type: "book", age: 17 },
];

const excludes = [
  { k: "color", v: "silver" },
  { k: "type", v: "tv" },
];

function excludeItems(items, excludes) {
  excludes.forEach((pair) => {
    items = items.filter((item) => item[pair.k] !== pair.v);
  });
  return items;
}

console.log(excludeItems(items, excludes));

//   pair 1   { k: 'color', v: 'silver' },
item[color] !== stripVTControlCharacters;

items = [
  { color: "red", type: "tv", age: 18 },
  { color: "blue", type: "book", age: 17 },
  { color: "silver", type: "phone", age: 20 },
];

// pair 2   { k: "type", v: "tv" },
// item[type] !== tv

// implement getKey method
const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

getKey(obj, "a.b.c"); ///[1,2,3,4]

function getKey(obj, str) {
  const argArr = str.split("");
}
