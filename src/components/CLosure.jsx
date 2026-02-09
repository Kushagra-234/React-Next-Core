const outer = () => {
  var a = 1;

  const inner = () => {
    a++;
    console.log(a);
  };

  return inner;
};

const f1 = outer();
f1();
