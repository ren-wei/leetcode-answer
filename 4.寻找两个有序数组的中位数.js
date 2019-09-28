/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var result = nums1.concat(nums2)
  result.sort((a, b) => a - b)
  if (result.length % 2) {
    return result[(result.length-1)/2]
  } else {
    return (result[result.length/2-1] + result[result.length/2]) / 2
  }
};
// @lc code=end
