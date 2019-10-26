/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var index = 0
  var i = 0
  while (i < nums.length) {
    if (nums[i] !== nums[i-1]) {
      nums[index] = nums[i]
      index++
    }
    i++
  }
  return index
}
// @lc code=end

