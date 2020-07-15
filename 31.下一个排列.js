/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  // 找出非降序的第一位，例如 `1 2 5 4 3` 的2对应的位置
  let i = nums.length - 1 // i=4
  let max = nums[i--] // max=3,i=3
  while(i >= 0 && nums[i] >= max) {
    max = nums[i] // max=5
    i-- // i=2
  }
  // 如果完全是降序排列，则变为升序排列
  if (i < 0) {
    nums.sort((a, b)=> a-b)
    return
  }
  // 将i+1到length-1升序排列
  let j = i + 1
  for (j=i+1;j<nums.length-1;j++) {
    for (let k=j+1;k<nums.length;k++) {
      if (nums[j] > nums[k]) {
        [nums[j], nums[k]] = [nums[k], nums[j]]
      }
    }
  }
  // 交换i和比i稍大的一位
  j = i + 1
  while(nums[j] <= nums[i]) {
    j++
  }
  [nums[i], nums[j]] = [nums[j], nums[i]]
  // 将i+1到length-1升序排列
  while(i+1 < nums.length-1) {
    if (nums[i+1] > nums[i+2]) {
      [nums[i+1], nums[i+2]] = [nums[i+2], nums[i+1]]
    } else {
      break
    }
    i++
  }
}
// @lc code=end

module.exports = nextPermutation
