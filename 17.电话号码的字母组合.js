/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var answer = [];
    if (!digits.length) {
        return answer;
    }
    var map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };

    answer.push('');
    for (var i = 0; i < digits.length; i++) {
        var x = digits[i];
        while (answer[0].length === i) {
            var t = answer.shift();
            map[x].forEach(s => {
                answer.push(t + s);
            });
        }
    }

    return answer;
};
// @lc code=end

module.exports = letterCombinations;
