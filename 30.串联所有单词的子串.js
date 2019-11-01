/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (!words.length) {
    return []
  }
  var len = words[0].length
  var i = 0
  var answer = []
  while (i + len <= s.length) {
    var start = i
    var index = words.indexOf(s.substr(i, len))
    if (index > -1) {
      var tempwords = words.slice(0)
      tempwords.splice(index, 1)
      i += len
      while (tempwords.length && i + len <= s.length) {
        index = tempwords.indexOf(s.substr(i, len))
        if (index > -1) {
          tempwords.splice(index, 1)
          i += len
        } else {
          i = start + 1
          break
        }
      }
      if (!tempwords.length) {
        answer.push(start)
        i = start + 1
      }
    } else {
      i++
    }
  }

  return answer
}
// @lc code=end

module.exports = findSubstring
