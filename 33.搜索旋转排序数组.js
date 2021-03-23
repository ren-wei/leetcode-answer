/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (start < mid) {
        if (target === nums[mid]) {
            return mid;
        }
        if (nums[start] < nums[end]) {
            // 正常升序排列，使用二分法
            if (target < nums[mid]) {
                end = mid;
            } else {
                start = mid;
            }
        } else {
            // 存在旋转点，向右缩小区间
            if (target === nums[start]) {
                return start;
            } else {
                start++;
            }
        }
        mid = Math.floor((start + end) / 2);
    }
    if (target === nums[mid]) {
        return mid;
    }
    if (target === nums[end]) {
        return end;
    }
    return -1;
};
// @lc code=end

module.exports = search;
