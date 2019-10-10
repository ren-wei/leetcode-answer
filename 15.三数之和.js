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
  var answer = []

  nums.sort((a, b) => a-b)
  
  for (var i=0;i<nums.length;i++) {
    // 如果第一个数大于零，则后面的两个数必然也大于零
    if (nums[i] > 0) {
      break
    }
    // 排除重复
    if (i > 0 && nums[i] === nums[i-1]) {
      continue
    }
    for (var j=i+1;j<nums.length;j++) {
      if (nums[i] + nums[j] > 0) {
        break
      }
      if (j > i+1 && nums[j] === nums[j-1]) {
        continue
      }
      // 使用二分法查找第三个数
      var left = j + 1
      var right = nums.length - 1
      while (left <= right) {
        var mid = (left + right) / 2 | 0
        var sum = nums[i] + nums[j] + nums[mid]
        if (sum < 0) {
          left = mid + 1
        } else if (sum > 0) {
          right = mid - 1
        } else {
          answer.push([nums[i], nums[j], nums[mid]])
          break
        }
      }
    }
  }

  return answer
}
// @lc code=end

