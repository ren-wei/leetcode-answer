/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target <= nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (left < mid) {
        if (nums[mid] > target) {
            right = mid;
            mid = Math.floor((left + right) / 2);
        } else if (nums[mid] < target) {
            left = mid;
            mid = Math.floor((left + right) / 2);
        } else {
            return mid;
        }
    }
    return mid + 1;
};
// @lc code=end

module.exports = searchInsert;
