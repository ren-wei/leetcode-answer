/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    var answer = [];
    for (var i = 0; i < nums.length - 3; i++) {
        while (nums[i] === nums[i - 1]) {
            i++;
        }
        for (var j = i + 1; j < nums.length - 2; j++) {
            while (j > i + 1 && nums[j] === nums[j - 1]) {
                j++;
            }
            var left = j + 1;
            var right = nums.length - 1;
            while (left < right) {
                var sum = nums[i] + nums[j] + nums[left] + nums[right];
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
                    answer.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (nums[left] === nums[left - 1]) {
                        left++;
                    }
                    while (nums[right] === nums[right + 1]) {
                        right--;
                    }
                }
            }
        }
    }
    return answer;
};
// @lc code=end

module.exports = fourSum;
