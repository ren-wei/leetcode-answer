/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var index = 0
  var i = 0
  while (i < nums.length) {
    if (nums[i] !== val) {
      nums[index] = nums[i]
      index++
    }
    i++
  }

  return index
}
// @lc code=end

