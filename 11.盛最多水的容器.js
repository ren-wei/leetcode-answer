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
    var leftValue = height[left]
    var rightValue = height[right]
    if (leftValue < rightValue) {
      var volume = leftValue * (right - left)
      if (volume > answer) {
        answer = volume
      }
      while (height[++left] < leftValue) {
      }
    } else {
      var volume = rightValue * (right - left)
      if (volume > answer) {
        answer = volume
      }
      while (height[--right] < rightValue) {
      }
    }
  }

  return answer
};
// @lc code=end

