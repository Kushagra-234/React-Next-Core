// move every 0 at end
// intuition ye hai ki agar non zero ho tb hi left bade and right hamesha bade hi abade

var moveZeroes = function (nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
};
