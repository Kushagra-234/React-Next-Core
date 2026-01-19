// html buttonc an contain html and input type button cannot contain it

// Accessibility means making web usable for people with disabilities using semantic HTML, alt attributes, labels, and keyboard navigation.

const outer = () => {
  var a = 10;

  function inner() {
    return a;
  }

  return inner;
};

const x = outer();
x();

Array.myMap = (fn, arr) => {
  const result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(fn, this[i], i);
  }

  return result;
};

Array.prototype.myMaps = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
};

function greet(city) {
  console.log("i", this.name, city);
}

const user = { name: "kush" };

const callfun = greet.call(user, "delhi");
const callfunAPply = greet.apply(user, ["delhi"]);
const callfunBind = greet.bind(user, "delhi");
callfunBind();
