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
  function generate(str, left, right, n, answer) {
    if (left === n) {
      for (var i=0;i<n-right;i++) {
        str += ')'
      }
      answer.push(str)
      return answer
    }
    if (left === right) {
      answer.concat(generate(str + '(', left+1, right, n, answer))
    } else {
      answer.concat(generate(str+'(', left+1, right, n, answer))
      answer.concat(generate(str+')', left, right+1, n, answer))
    }
    return answer
  }

  return generate('', 0, 0, n, [])
}
// @lc code=end

