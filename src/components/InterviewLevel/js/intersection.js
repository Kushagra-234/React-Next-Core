function Intersection(arr1, arr2) {
  let map = {};

  for (let i = 0; i < arr1.length; i++) {
    let result = [];
    let value = arr1[i];
    map[value] = (map[value] || 0) + 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    let value = arr2[i];

    if (map[value]) {
      if (map[value] === 1) {
        result.push(value);
      }else {
        
      }
    }
  }
}
