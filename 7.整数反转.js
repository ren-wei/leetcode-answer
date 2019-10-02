/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var plus = true
  if (x < 0) {
    plus = false
    x = -x
  }
  // 翻转字符串
  var s = x.toString()
  var sList = s.split('')
  sList.reverse()
  s = sList.join('')
  // 去除头部的`0`
  s.replace(/\b(0+)/gi,"")
  // 判断是否溢出
  if (plus) {
    if (s.length > 10 || s.length === 10 && s > "2147483647") {
      return 0
    }
  } else {
    if (s.length > 10 || s.length === 10 && s > "2147483648") {
      return 0
    }
  }
  if (plus) {
    return Number(s)
  }
  else {
    return -Number(s)
  }
};
// @lc code=end