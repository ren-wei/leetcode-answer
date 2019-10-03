/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.replace(/^\s+/,'')
  var answer = str.match(/^[\+\-]?\d+/)
  return Math.max(Math.min(answer ? Number(answer[0]) : 0, 2147483647) ,-2147483648)
};
// @lc code=end
