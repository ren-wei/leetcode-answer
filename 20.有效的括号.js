/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var mapping = new Map()
  mapping.set(')', '(')
  mapping.set(']', '[')
  mapping.set('}', '{')

  var brackets = Array()
  for (var i=0;i<s.length;i++) {
    var c = s[i]
    var mapValue = mapping.get(c)
    if (mapValue) {
      if (brackets.pop() !== mapValue) {
        return false
      }
    } else {
      brackets.push(c)
    }
  }
  if (brackets.length > 0) {
    return false
  }
  return true
}
// @lc code=end

