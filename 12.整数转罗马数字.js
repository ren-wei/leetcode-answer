/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var romans = [
        ['I', 'IV', 'V', 'IX'],
        ['X', 'XL', 'L', 'XC'],
        ['C', 'CD', 'D', 'CM'],
        ['M'],
    ];

    var answer = '';

    var index = 0;
    while (num) {
        var m = num % 10;
        num = (num - m) / 10;
        var add = '';

        if (m === 9) {
            answer = romans[index][3] + answer;
            index++;
            continue;
        }
        if (m >= 5) {
            add = romans[index][2];
            m -= 5;
        }
        if (m === 4) {
            answer = romans[index][1] + answer;
            index++;
            continue;
        }
        while (m) {
            add += romans[index][0];
            m--;
        }
        answer = add + answer;
        index++;
    }

    return answer;
};
// @lc code=end

module.exports = intToRoman;
