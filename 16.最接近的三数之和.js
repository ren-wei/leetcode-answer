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
    var left = i + 1
    var right = nums.length - 1
    while (left < right) {
      var sum = nums[i] + nums[left] + nums[right]
      if (sum < target) {
        left++
      } else if (sum > target) {
        right--
      } else {
        return target
      }
      if (Math.abs(sum - target) < Math.abs(answer - target)) {
        answer = sum
      }
    }
  }

  return answer
}
// @lc code=end

