/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var answer = [];

    nums.sort((a, b) => a - b);

    for (var i = 0; i < nums.length; i++) {
    // 如果第一个数大于零，则后面的两个数必然也大于零
        if (nums[i] > 0) {
            break;
        }
        // 排除重复
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        var left = i + 1;
        var right = nums.length - 1;
        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) {
                left++;
                while (left > i + 1 && nums[left] === nums[left - 1]) {
                    left++;
                }
            } else if (sum > 0) {
                right--;
                while (nums[right] === nums[right + 1]) {
                    right--;
                }
            } else {
                answer.push([nums[i], nums[left], nums[right]]);
                left++;
                while (left > i + 1 && nums[left] === nums[left - 1]) {
                    left++;
                }
                right--;
                while (nums[right] === nums[right + 1]) {
                    right--;
                }
            }
        }
    }

    return answer;
};
// @lc code=end

module.exports = threeSum;
