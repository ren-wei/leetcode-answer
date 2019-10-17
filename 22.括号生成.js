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

  var answer = [[''], ['()']]

  for (var i=2;i<n+1;i++) {
    var left = []
    for (var j=0;j<i;j++) {
      answer[j].forEach(p => {
        answer[i-1-j].forEach(q => {
          left.push('(' + p + ')' + q)
        })
      })
    }
    answer.push(left)
  }

  return answer[n]
}
// @lc code=end

