/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle.length) {
    return 0
  }
  for (var i=0;i<haystack.length;i++) {
    var isEqual = true
    for (var j=0;j<needle.length;j++) {
      if (haystack[i+j] !== needle[j]) {
        isEqual = false
        break
      }
    }
    if (isEqual) {
      return i
    }
  }
  return -1
}
// @lc code=end

