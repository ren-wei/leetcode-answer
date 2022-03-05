/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 检查行
    for (let i = 0; i < 9; i++) {
        const row = board[i].filter(v => v !== '.');
        if (new Set(row).size !== row.length) return false;
    }
    // 检查列
    for (let i = 0; i < 9; i++) {
        const col = [];
        for (let j = 0; j < 9; j++) {
            if (board[j][i] !== '.') {
                col.push(board[j][i]);
            }
        }
        if (new Set(col).size !== col.length) return false;
    }
    // 检查九宫格
    for (let i = 1; i < 9; i += 3) {
        for (let j = 1; j < 9; j += 3) {
            const list = [
                board[i - 1][j - 1],
                board[i - 1][j],
                board[i - 1][j + 1],
                board[i][j - 1],
                board[i][j],
                board[i][j + 1],
                board[i + 1][j - 1],
                board[i + 1][j],
                board[i + 1][j + 1],
            ].filter(v => v !== '.');
            if (new Set(list).size !== list.length) return false;
        }
    }
    return true;
};
// @lc code=end

module.exports = isValidSudoku;
