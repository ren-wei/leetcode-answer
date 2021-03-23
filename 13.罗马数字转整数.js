/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var nums = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    var answer = 0;
    var value = nums[s[0]];
    for (var i = 1; i < s.length; i++) {
        var newValue = nums[s[i]];
        if (newValue > value) {
            answer -= value;
        } else {
            answer += value;
        }
        value = newValue;
    }
    answer += value;

    return answer;
};
// @lc code=end

module.exports = romanToInt;
