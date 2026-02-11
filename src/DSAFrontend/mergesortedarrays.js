// idea ye hai ki ham merge krenge end se in the bigger array of nums1

var merge = function (nums1, m, nums2, n) {
  let p1 = nums1.length - 1;
  let p2 = nums2.length - 1;
  let p = m + n - 1;

  while (p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
};
