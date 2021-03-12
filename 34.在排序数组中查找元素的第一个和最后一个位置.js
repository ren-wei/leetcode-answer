/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 用二分查找找出目标位置，然后向左右扩展找出开始和结束位置
    let start = 0
    let end = nums.length - 1
    let mid = Math.floor((start + end) / 2)
    while(start < mid) {
        if (nums[mid] === target) {
            start = mid
            end = mid
        } else if (nums[mid] < target) {
            start = mid
        } else {
            end = mid
        }
        mid = Math.floor((start + end) / 2)
    }
    if (nums[start] === target) {
        // 向左扩展
        while(nums[start - 1] === target) {
            start--
        }
    } else {
        start = -1
    }
    if (nums[end] === target) {
        // 向右扩展
        if (start === -1) {
            start = end
        }
        while(nums[end + 1] === target) {
            end++
        }
    } else {
        if (start === -1) {
            return [-1, -1]
        }
        end = mid
    }
    return [start, end]
};
// @lc code=end

module.exports = searchRange
