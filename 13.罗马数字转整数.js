/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var nums = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "IX": 9,
    "X": 10,
    "XL": 40,
    "L": 50,
    "XC": 90,
    "C": 100,
    "CD": 400,
    "D": 500,
    "CM": 900,
    "M": 1000
  }

  var answer = 0

  var i = 0
  while (i < s.length) {
    var num = nums[s.substr(i, 2)]
    if (num === undefined) {
      answer += nums[s[i]]
      i++
    } else {
      answer += num
      i += 2
    }
  }

  return answer
};
// @lc code=end

