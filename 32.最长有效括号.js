/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    // 获取未匹配左括号数量
    const getTotal = function(str, start, end) {
        let total = 0;
        for (let i = start; i < end; i++) {
            if (s[i] === '(') {
                total++;
            } else {
                total--;
                if (total < 0) {
                    break;
                }
            }
        }
        return total;
    };

    let maxLength = 0; // 最长子串长度
    let curLength = 0; // 当前子串长度
    let total = 0; // 需要匹配的左括号的数量
    let start = 0; // total开始的位置
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            total++;
        } else {
            total--;
            if (total >= 0) {
                // 匹配成功后，获取最大有效长度
                curLength += 2;
                if (maxLength < curLength) {
                    // 从比原最大长度稍大的长度对应位置(curStart)开始
                    // 向左溯及，检查符合的子串，直到start对应的开始位置
                    let curStart = i - maxLength - 1; // 当前起始位置
                    let validityIndex = curStart + 2; // 有效起始位置
                    while (curStart >= start) {
                        const curTotal = getTotal(s, curStart, i + 1);
                        if (curTotal === 0) {
                            validityIndex = curStart;
                        } else if (curTotal > 0) {
                            break;
                        }
                        curStart -= 2;
                    }
                    maxLength = i + 1 - validityIndex;
                }
            } else {
                total = 0;
                start = i + 1;
                curLength = 0;
            }
        }
    }
    return maxLength;
};
// @lc code=end

module.exports = longestValidParentheses;
