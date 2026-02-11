//  leetcode
// return 0

// intuition - intuition ye hai ki pehle to ek map me bhar lo saari values fir uss string pe chalao loop to find out ki uss character ki map me value 1 to nhi agar hai to return kr const {propertyName} = objectToDestruct

let map = {};

for (let i = 0; i < s.length; i++) {
  map[s[i]] = (map[s[i]] ? map[s[i]] : 0) + 1;
}

for (let i = 0; i < s.length; i++) {
  if (map[s[i]] === 1) {
    return i;
  }

  return -1;
}

// okay now complexity 
space - O(1)
time -O(n)
