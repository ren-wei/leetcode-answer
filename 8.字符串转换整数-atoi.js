/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.replace(/^\s+/,'')
  var answer = 0
  var len = 0
  var plus = true
  if (str[0] === '-') {
    plus = false
    str = str.substring(1)
  } else if (str[0] === '+') {
    str = str.substring(1)
  }
  var nlist = str.split('')

  var maxi = Math.min(9, nlist.length)

  // 对前9位赋值
  for (var i=0;i<maxi;i++) {
    var value = Number(nlist[i])
    if (isNaN(value) || nlist[i] === ' ') {
      if (plus) {
        return answer
      } else {
        return -answer
      }
    } else {
      answer = answer * 10 + value
      if (answer === 0) {
        maxi++
      }
    }
  }

  // 对第10位赋值
  var value = Number(nlist[maxi])
  if (isNaN(value) || nlist[maxi] === ' ') {
    if (plus) {
      return answer
    } else {
      return -answer
    }
  }
  if (plus) {
    if (2147483647 - value < answer * 10) {
      return 2147483647
    }
    answer = answer * 10 + value
    // 如果有第11位返回最大值
    if (nlist.length > maxi+1 && (!isNaN(Number(nlist[maxi+1]))) && nlist[maxi+1] !== ' ') {
      return 2147483647
    } else {
      return answer
    }
  } else {
    if (2147483648 - value < answer * 10) {
      return -2147483648
    }
    answer = answer * 10 + value
    if (nlist.length > maxi+1 && (!isNaN(Number(nlist[maxi+1]))) && nlist[maxi+1] !== ' ') {
      return -2147483648
    } else {
      return -answer
    }
  }
};
// @lc code=end
