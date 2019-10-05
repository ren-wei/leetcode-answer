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
  var memo = Array.from({length: s.length+1}, function() {
    return new Array(p.length+1)
  })

  function dp(i, j) {
    if (memo[i][j] === undefined) {
      var ans
      if (j === p.length) {
        ans = i === s.length
      } else {
        var first = i < s.length && (p[j] === s[i] || p[j] === '.')
        if (j+1 < p.length && p[j+1] === '*') {
          ans = dp(i, j+2) || first && dp(i+1, j)
        } else {
          ans = first && dp(i+1, j+1)
        }
      }
      memo[i][j] = ans
    }
    return memo[i][j]
  }

  return dp(0, 0)
};
// @lc code=end
