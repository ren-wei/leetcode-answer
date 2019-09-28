/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var len = s.length
  var set = new Set()
  var result=0, i=0, j=0
  while (i < len && j < len) {
    if (!set.has(s[j])) {
      set.add(s[j])
      j++
      result = Math.max(result, j - i)
    } else {
      set.delete(s[i])
      i++
    }
  }
  return result
};

