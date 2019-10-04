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
  if (x < 0) {
    return false
  }
  var oldValue = x
  var value = 0
  while (x) {
    var remain = x % 10
    x = (x - remain) / 10
    value = value * 10 + remain
  }
  return oldValue === value
};
// @lc code=end

