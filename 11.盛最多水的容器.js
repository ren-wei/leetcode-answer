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
  for (var i=0;i<height.length;i++) {
    for (var j=i+1;j<height.length;j++) {
      var volume = Math.min(height[i], height[j]) * (j - i)
      if (volume > answer) {
        answer = volume
      }
    }
  }

  return answer
};
// @lc code=end

