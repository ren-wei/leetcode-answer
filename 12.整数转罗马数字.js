/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var answer = []
  while (num >= 1000) {
    answer.push('M')
    num -= 1000
  }
  if (num >= 900) {
    answer.push('CM')
    num -= 900
  }
  if (num >= 500) {
    answer.push('D')
    num -= 500
  }
  if (num >= 400) {
    answer.push('CD')
    num -= 400
  }
  while (num >= 100) {
    answer.push("C")
    num -= 100
  }
  if (num >= 90) {
    answer.push('XC')
    num -= 90
  }
  if (num >= 50) {
    answer.push('L')
    num -= 50
  }
  if (num >= 40) {
    answer.push('XL')
    num -= 40
  }
  while (num >= 10) {
    answer.push('X')
    num -= 10
  }
  if (num >= 9) {
    answer.push('IX')
    num -= 9
  }
  if (num >= 5) {
    answer.push('V')
    num -= 5
  }
  if (num >= 4) {
    answer.push('IV')
    num -= 4
  }
  while (num > 0) {
    answer.push('I')
    num--
  }

  return answer.join('')
};
// @lc code=end

