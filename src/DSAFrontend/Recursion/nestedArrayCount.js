function countNested(arr) {
  // count total numbers in nested array
}

countNested([1, [2, [3, 4]], 5]); // 5

function countNested(arr) {
  if (arr.length === 0) return 0;
  let count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      count += countNested(arr[i]);
    } else {
      count++;
    }
  }

  return count;
}
