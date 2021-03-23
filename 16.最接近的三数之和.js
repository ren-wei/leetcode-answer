/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var answer = Infinity;
    nums.sort((a, b) => a - b);
    var len = nums.length;
    for (var i = 0; i < len - 2; i++) {
        while (nums[i] === nums[i - 1]) {
            i++;
        }
        if (nums[i] + nums[i + 1] + nums[i + 2] > target) {
            if (Math.abs(target - (nums[i] + nums[i + 1] + nums[i + 2])) < Math.abs(target - answer)) {
                answer = nums[i] + nums[i + 1] + nums[i + 2];
                continue;
            }
        }
        if (nums[i] + nums[len - 1] + nums[len - 2] < target) {
            if (Math.abs(target - (nums[i] + nums[len - 1] + nums[len - 2])) < Math.abs(target - answer)) {
                answer = nums[i] + nums[len - 1] + nums[len - 2];
                continue;
            }
        }
        var left = i + 1;
        var right = len - 1;
        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (sum < target) {
                left++;
                while (nums[left] === nums[left - 1]) {
                    left++;
                }
            } else if (sum > target) {
                right--;
                while (nums[right] === nums[right + 1]) {
                    right--;
                }
            } else {
                return target;
            }
            if (Math.abs(sum - target) < Math.abs(answer - target)) {
                answer = sum;
            }
        }
    }

    return answer;
};
// @lc code=end

module.exports = threeSumClosest;
