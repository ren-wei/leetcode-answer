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
  if (!strs.length) {
    return ''
  } else if (strs.length === 1) {
    return strs[0]
  }
  var i=0;
  while(true) {
    var char = strs[0][i]
    for (var j=1;j<strs.length;j++) {
      if (strs[j][i] !== char || char === undefined) {
        return strs[0].substring(0, i)
      }
    }
    i++
  }
};
// @lc code=end

