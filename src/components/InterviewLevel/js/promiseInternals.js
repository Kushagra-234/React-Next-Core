// prmise is a object which represents eventual completion of a task which is asynchronous in nature

const p = new Promise((resolve, reject) => {
  reject("hey");
});

p.then((val) => {
  console.log(val);
  return val;
}).catch((err) => {
  return err;
});
