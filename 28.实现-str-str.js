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
  // 处理边界情况
  if (needle.length > haystack.length) {
    return -1
  }
  if (!needle.length) {
    return 0
  }
  // 计算偏移表
  var offset = new Map()
  for (var i=0;i<needle.length;i++) {
    offset.set(needle[i], needle.length-i)
  }
  // 开始匹配
  var index = 0
  while (index + needle.length <= haystack.length) {
    var isEqual = true
    for (i=0;i<needle.length;i++) {
      if (haystack[index+i] !== needle[i]) {
        isEqual = false
        break
      }
    }
    if (isEqual) {
      return index
    }
    var offsetValue = offset.get(haystack[index+needle.length])
    if (offsetValue) {
      index += offsetValue
    } else {
      index += needle.length + 1
    }
  }

  return -1
}
// @lc code=end

