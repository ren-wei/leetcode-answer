/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s
  }
  var result = ''
  var len = s.length
  var loopLen = 2 * numRows - 2

  // 第一层
  for (var j=0;j<len;j+=loopLen) {
    result += s[j]
  }
  // 中间层
  for (var i=1;i<numRows-1;i++) {
    for (var j=0;j + i < len;j += loopLen) {
      result += s[j+i]
      if (j + loopLen -i < len) {
        result += s[j+loopLen-i]
      }
    }
  }
  // 最后一层
  for (var j=numRows-1;j<len;j += loopLen) {
    result += s[j]
  }
  return result
};
// @lc code=end

