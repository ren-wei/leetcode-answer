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
  var numRowList = Array.from({ length:Math.min(numRows, s.length) }, () => [])
  var index = 0
  while (index < s.length) {
    for (var i=0;i<numRowList.length;i++) {
      if (index < s.length) {
        numRowList[i].push(s[index++])
      } else {
        break
      }
    }

    for (var j=numRowList.length-2;j>0;j--) {
      if (index < s.length) {
        numRowList[j].push(s[index++])
      } else {
        break
      }
    }
  }

  return [].concat(...numRowList).join('')
};
// @lc code=end

