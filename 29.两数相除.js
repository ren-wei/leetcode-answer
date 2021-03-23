/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // 将被除数和除数都转换为正数
    var sign = true;
    if (dividend < 0) {
        dividend = -dividend;
        sign = !sign;
    }
    if (divisor < 0) {
        divisor = -divisor;
        sign = !sign;
    }

    var answer = 0;
    while (divisor <= dividend) {
        var count = 1;
        // 临时除数，每次扩大一倍
        var tempDivisor = divisor;
        while (tempDivisor <= dividend) {
            dividend -= tempDivisor;
            answer += count;
            count *= 2;
            tempDivisor *= 2;
        }
    }
    if (sign) {
        return Math.min(2147483647, answer);
    } else {
        return Math.max(-2147483648, -answer);
    }
};
// @lc code=end

module.exports = divide;
