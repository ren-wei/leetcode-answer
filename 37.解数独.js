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
    // 转化规则: 数字 => 对应的二进制的位置
    const int = {
        '1': 0,
        '2': 1,
        '3': 2,
        '4': 3,
        '5': 4,
        '6': 5,
        '7': 6,
        '8': 7,
        '9': 8,
    };
    // 各行当前的值
    const rows = new Array(9).fill(0);
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                rows[i] |= 1 << int[board[i][j]];
            }
        }
    }
    // 各列当前的值
    const cols = new Array(9).fill(0);
    for (let j = 0; j < 9; j++) {
        for (let i = 0; i < 9; i++) {
            if (board[i][j] !== '.') {
                cols[j] |= 1 << int[board[i][j]];
            }
        }
    }
    // 九宫格当前的值
    const grids = new Array(9).fill(0);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            if (board[i * 3][j * 3] !== '.') grids[index] |= 1 << int[board[i * 3][j * 3]];
            if (board[i * 3][j * 3 + 1] !== '.') grids[index] |= 1 << int[board[i * 3][j * 3 + 1]];
            if (board[i * 3][j * 3 + 2] !== '.') grids[index] |= 1 << int[board[i * 3][j * 3 + 2]];
            if (board[i * 3 + 1][j * 3] !== '.') grids[index] |= 1 << int[board[i * 3 + 1][j * 3]];
            if (board[i * 3 + 1][j * 3 + 1] !== '.') grids[index] |= 1 << int[board[i * 3 + 1][j * 3 + 1]];
            if (board[i * 3 + 1][j * 3 + 2] !== '.') grids[index] |= 1 << int[board[i * 3 + 1][j * 3 + 2]];
            if (board[i * 3 + 2][j * 3] !== '.') grids[index] |= 1 << int[board[i * 3 + 2][j * 3]];
            if (board[i * 3 + 2][j * 3 + 1] !== '.') grids[index] |= 1 << int[board[i * 3 + 2][j * 3 + 1]];
            if (board[i * 3 + 2][j * 3 + 2] !== '.') grids[index] |= 1 << int[board[i * 3 + 2][j * 3 + 2]];
        }
    }
    const solve = (row = 0, col = 0) => {
        for (let i = row; i < 9; i++) {
            for (let j = i === row ? col : 0; j < 9; j++) {
                if (board[i][j] === '.') {
                    // 尝试填入符合规则的值
                    for (let n = 1; n < 10; n++) {
                        const sn = String(n);
                        const v = 1 << n - 1;
                        const index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                        if ((v & rows[i] | v & cols[j] | v & grids[index]) === 0) {
                            board[i][j] = sn;
                            rows[i] |= v;
                            cols[j] |= v;
                            grids[index] |= v;
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
                            rows[i] -= v;
                            cols[j] -= v;
                            grids[index] -= v;
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
