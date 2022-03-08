/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return '1';
    const str = countAndSay(n - 1);
    let count = 1;
    let c = str[0];
    let result = '';
    for (let i = 1; i < str.length; i++) {
        if (str[i] === c) {
            count++;
        } else {
            result += count + c;
            c = str[i];
            count = 1;
        }
    }
    if (count) {
        result += count + c;
    }
    return result;
};
// @lc code=end

module.exports = countAndSay;
