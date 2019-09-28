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
  var map = new Map()
  var result=0, i=0, j=0
  while (i < len && j < len) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]), i)
    }
    result = Math.max(result, j+1-i)
    map.set(s[j], ++j)
  }
  return result
};

