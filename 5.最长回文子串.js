/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var len = s.length
  if (!len) {
    return s
  }
  var result = s[0]
  for (var i=0;i<len;i++) {
    // 以当前字符为中心
    var left = i
    var right = i
    while (left - 1 >= 0 && right + 1 < len) {
      if (s[left-1] === s[right+1]) {
        left--
        right++
      } else {
        break
      }
    }
    if (right + 1 - left > result.length) {
      result = s.substring(left, right+1)
    }
    // 以当前字符与下一字符之间为中心
    left = i + 1
    right = i
    while (left - 1 >= 0 && right + 1 < len) {
      if (s[left-1] === s[right+1]) {
        left--
        right++
      } else {
        break
      }
    }
    if (right + 1 - left > result.length) {
      result = s.substring(left, right+1)
    }
  }

  return result
};
// @lc code=end
