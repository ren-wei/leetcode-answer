/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var answer = 0
  var left = 0
  var right = height.length - 1
  while (left < right) {
    var volume = Math.min(height[left], height[right]) * (right - left)
    if (volume > answer) {
      answer = volume
    }
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return answer
};
// @lc code=end

