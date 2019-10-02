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
  var answer = 0
  var plus = true
  if (x < 0) {
    plus = false
    x = -x
  }
  while (x > 9) {
    var remain = x % 10
    x = (x - remain) / 10
    answer = answer * 10 + remain
  }
  if (plus) {
    if (2147483647 - x < answer * 10) {
      return 0
    } else {
      return answer * 10 + x
    }
  } else {
    if (2147483648 - x < answer * 10) {
      return 0
    } else {
      return - (answer * 10 + x)
    }
  }
};
// @lc code=end