/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 0) {
    return ['']
  }
  var answer = []
  for (var i=0;i<n;i++) {
    generateParenthesis(i).forEach(left => {
      generateParenthesis(n-1-i).forEach(right => {
        answer.push('(' + left + ')' + right)
      })
    })
  }

  return answer
}
// @lc code=end

