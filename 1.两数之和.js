/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (nums.length < 2) {
    return null
  }
  
  var map = new Map()
  for (var i=0;i<nums.length;i++) {
    var value = map.get(target - nums[i])
    if (value !== undefined) {
      return [value, i]
    }
    map.set(nums[i], i)
  }
};

