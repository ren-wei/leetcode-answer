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
  while (nums1.length + nums2.length > 2 && nums1.length && nums2.length) {
    var startd1 = true
    if (nums1[0] > nums2[0]) {
      startd1 = false
    }
    var endd1 = true
    if (nums1[nums1.length-1] < nums2[nums2.length-1]) {
      endd1 = false
    }
    if (startd1) {
      nums1.shift()
    } else {
      nums2.shift()
    }
    if (endd1) {
      nums1.pop()
    } else {
      nums2.pop()
    }
  }
  if (!nums1.length) {
    if (nums2.length%2) {
      return nums2[(nums2.length-1) / 2]
    } else {
      return (nums2[nums2.length/2-1] + nums2[nums2.length/2]) / 2
    }
  }
  if (!nums2.length) {
    if (nums1.length%2) {
      return nums1[(nums1.length-1) / 2]
    } else {
      return (nums1[nums1.length/2-1] + nums1[nums1.length/2]) / 2
    }
  }
  
  return (nums1[0] + nums2[0]) / 2
};
// @lc code=end
