/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  function isCommonPrefix(strs, len) {
    var str = strs[0].substr(0, len)
    for (var i=1;i<strs.length;i++) {
      if (str !== strs[i].substr(0, len)) {
        return false
      }
    }
    return true
  }

  if (!strs.length) {
    return ''
  }

  // 找出最小长度
  var minLen = strs[0].length
  for (var i=1;i<strs.length;i++) {
    var len = strs[i].length
    if (len < minLen) {
      minLen = len
    }
  }

  // 进行二分查找
  var left = 1
  var right = minLen
  while (left <= right) {
    var mid = (left + right) / 2 | 0
    if (isCommonPrefix(strs, mid)) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return strs[0].substring(0, (left + right) / 2 | 0)
};
// @lc code=end

