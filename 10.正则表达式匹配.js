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
  var dp = Array.from({length: s.length+1}, function() {
    return new Array(p.length+1).fill(false)
  })
  
  dp[s.length][p.length] = true
  for (var i=s.length;i>=0;i--) {
    for (var j=p.length-1;j>=0;j--) {
      var first = i < s.length && (p[j] === s[i] || p[j] === '.')
      if (j+1 < p.length && p[j+1] === '*') {
        dp[i][j] = dp[i][j+2] || first && dp[i+1][j]
      } else {
        dp[i][j] = first && dp[i+1][j+1]
      }
    }
  }

  return dp[0][0]
};
// @lc code=end
