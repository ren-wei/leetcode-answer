/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const solve = (row = 0, col = 0) => {
        for (let i = row; i < 9; i++) {
            for (let j = i === row ? col : 0; j < 9; j++) {
                if (board[i][j] === '.') {
                    // 获取已经存在的数
                    // 所在行
                    const nums = board[i].filter(v => v !== '.');
                    // 所在列
                    for (let k = 0; k < 9; k++) {
                        if (board[k][j] !== '.') {
                            nums.push(board[k][j]);
                        }
                    }
                    // 所在的九宫格
                    const x = Math.floor(i / 3) * 3 + 1; // 九宫格的中心的x
                    const y = Math.floor(j / 3) * 3 + 1; // 九宫格的中心的y
                    if (board[x - 1][y - 1] !== '.') nums.push(board[x - 1][y - 1]);
                    if (board[x - 1][y] !== '.') nums.push(board[x - 1][y]);
                    if (board[x - 1][y + 1] !== '.') nums.push(board[x - 1][y + 1]);
                    if (board[x][y - 1] !== '.') nums.push(board[x][y - 1]);
                    if (board[x][y] !== '.') nums.push(board[x][y]);
                    if (board[x][y + 1] !== '.') nums.push(board[x][y + 1]);
                    if (board[x + 1][y - 1] !== '.') nums.push(board[x + 1][y - 1]);
                    if (board[x + 1][y] !== '.') nums.push(board[x + 1][y]);
                    if (board[x + 1][y + 1] !== '.') nums.push(board[x + 1][y + 1]);
                    // 尝试填入符合规则的值
                    for (let n = 1; n < 10; n++) {
                        const sn = String(n);
                        if (!nums.includes(sn)) {
                            board[i][j] = sn;
                            const next = [i, j + 1]; // 下一个元素的位置
                            if (j === 8) {
                                if (i < 8) {
                                    next[0] = i + 1;
                                    next[1] = 0;
                                } else {
                                    return true;
                                }
                            }
                            if (solve(next[0], next[1])) {
                                return true;
                            }
                            // 回退
                            board[i][j] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };
    solve();
    return board;
};
// @lc code=end

module.exports = solveSudoku;
