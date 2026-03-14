// create an array with range of numbers

function rangeofNumbers(startNum, endNum) {
  let result = [startNum];

  if (result.length === endNum - startNum + 1) return result;
  else {
    rangeofNumbers(startNum + 1, endNum);
    result.push(startNum + 1);
  }
}

rangeofNumbers(0, 5);
return [0, 1, 2, 3, 4, 5];

function rangeofNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    result.push(startNum);
    rangeofNumbers(startNum + 1, endNum);
  }
}
