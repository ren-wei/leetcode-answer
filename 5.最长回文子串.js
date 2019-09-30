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
  // Manacher算法

  // 使用`#`填充使其长度为奇数
  var slist = s.split('')
  var ns = '#' + slist.join('#') + '#'

  // 定义p数组
  var p = new Array(ns.length).fill(0)
  var id = 0       // 用于对称性的子串中心的下标
  var right = 0    // id子串的最右边界下标
  var reCenter = 0 // 最大回文子串中心下标
  var reLen = 0    // 最大回文子串长度

  // 开始遍历
  for (var i=0;i<ns.length;i++) {
    // 在以id为中心的回文内,当前位置和关于id对称的位置相同
    if (right > i) {
      p[i] = Math.min(right - i, p[2*id - i])
    } else {
      p[i] = 1
    }
    // 扩展回文子串
    while (i-p[i] >= 0 && ns[i+p[i]] === ns[i-p[i]]) {
      p[i]++
    }
    // 当i在id子串右边界之外时更新id子串
    if (i + p[i] > right) {
      id = i
      right = i + p[i]
    }
    // 更新结果
    if (p[i] > reLen) {
      reCenter = i
      reLen = p[i]
    }
  }
  return s.substr(Math.ceil((reCenter-reLen)/2), reLen - 1)
};
// @lc code=end
