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
  var answer = Infinity
  nums.sort((a, b) => a - b)
  for (var i=0;i<nums.length-2;i++) {
    for (var j=i+1;j<nums.length-1;j++) {
      var left = j + 1
      var right = nums.length - 1
      while (left <= right) {
        var mid = (left + right) / 2 | 0
        var sum = nums[i] + nums[j] + nums[mid]
        if (sum < target) {
          left = mid + 1
        } else if (sum > target) {
          right = mid - 1
        } else {
          return target
        }
        if (Math.abs(target - sum) < Math.abs(target - answer)) {
          answer = sum
        }
      }
    }
  }

  return answer
}
// @lc code=end

