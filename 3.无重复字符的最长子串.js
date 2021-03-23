/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    var map = new Map();
    var result = 0; var i = 0; var j = 0;
    while (i < len && j < len) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]), i);
        }
        result = Math.max(result, j + 1 - i);
        map.set(s[j], ++j);
    }
    return result;
};
// @lc code=end

module.exports = lengthOfLongestSubstring;
