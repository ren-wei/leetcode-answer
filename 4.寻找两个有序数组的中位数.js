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
  if (nums1.length > nums2.length) {
    var temp = nums1
    nums1 = nums2
    nums2 = temp
    // [m, n] = [n, m]
  }
  var m = nums1.length
  var n = nums2.length
  // 定义数组1的左右边界
  var left = 0
  var right = m
  // 一半长度
  var half = Math.floor((m + n + 1) / 2)
  while (left <= right) {
    var i = Math.floor((left + right) / 2)
    var j = half - i
    if (i < right && nums1[i] < nums2[j-1]) {
      left = i + 1
    } else if (i > left && nums2[j] < nums1[i-1]) {
      right = i - 1
    } else {
      var leftMax
      if (i === 0) {
        leftMax = nums2[j-1]
      } else if (j === 0) {
        leftMax = nums1[i-1]
      } else {
        leftMax = Math.max(nums1[i-1], nums2[j-1])
      }

      if ((m + n) % 2) {
        return leftMax
      }

      var rightMin
      if (i === m) {
        rightMin = nums2[j]
      } else if (j === n) {
        rightMin = nums1[i]
      } else {
        rightMin = Math.min(nums1[i], nums2[j])
      }

      return (leftMax + rightMin) / 2
    }
  }
};
// @lc code=end
