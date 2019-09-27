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
    map.set(nums[i], i)
  }
  for (var j=0;j<nums.length;j++) {
    var value = map.get(target - nums[j])
    if (value && j!=value) {
      return [j, value]
    }
  }
};

