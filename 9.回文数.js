/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var s = x.toString()

  var left = 0
  var right = s.length - 1
  while (left < right) {
    if (s[left++] !== s[right--]) {
      return false
    }
  }
  return true
};
// @lc code=end

