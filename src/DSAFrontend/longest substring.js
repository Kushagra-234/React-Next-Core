// intuition ye hai ki ham ek window maintain krenge left se right distinct characters ki and if
// usme mujhe laga ki repeated character aa gya hai to ham left++ kr denge bada denge window ko

// longest substring
// abcdabc

// let map={}
// let left=0;
// let maxlen=0;

// // dry run
// left=0;
// right=0;

// // when s[i]=aamap me gya
// right-left+1=1
// {a:0,b:1,c:1,d:1}  maxlen =4

// right=4
// left=

var lengthOfLongestSubstring = function (s) {
  let map = {};
  let left = 0;
  let maxVal = 0;

  for (let r = 0; r < s.length; r++) {
    let char = s[r];

    if (map[char] !== undefined && map[char] >= left) {
      left = map[char] + 1;
    }

    map[char] = r;
    maxVal = Math.max(maxVal, right - left + 1);
  }

  return maxVal;
};
