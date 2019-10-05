/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (!p.length) {
    return s === ''
  }

  var first = Boolean(s) && (s[0] === p[0] || p[0] === '.')

  if (p.length > 1 && p[1] === '*') {
    if (isMatch(s, p.substring(2))) {
      return true
    }
    return first && isMatch(s.substring(1), p)
  } else {
    return first && isMatch(s.substring(1), p.substring(1))
  }
};
// @lc code=end
