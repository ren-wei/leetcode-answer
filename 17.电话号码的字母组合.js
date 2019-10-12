/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits.length) {
    return []
  }
  var map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  function lc(digits, i) {
    if (digits.length - i === 1) {
      return map[digits[i]]
    }
    var answer = []
    map[digits[i]].forEach(str => {
      lc(digits, i+1).forEach(result => {
        answer.push(str + result)
      })
    })
    return answer
  }

  return lc(digits, 0)
}
// @lc code=end

