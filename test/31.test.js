const nextPermutation = require('../31.下一个排列')

test('基本测试', () => {
  let nums1 = [1, 2, 3]
  nextPermutation(nums1)
  expect(nums1).toEqual([1, 3, 2])

  let nums2 = [3, 2, 1]
  nextPermutation(nums2)
  expect(nums2).toEqual([1, 2, 3])

  let nums3 = [1, 1, 5]
  nextPermutation(nums3)
  expect(nums3).toEqual([1, 5, 1])
})

test('边界测试', () => {
  let nums1 = [1, 3, 5, 5]
  nextPermutation(nums1)
  expect(nums1).toEqual([1, 5, 3, 5])

  let nums2 = [1, 6, 3, 3]
  nextPermutation(nums2)
  expect(nums2).toEqual([3, 1, 3, 6])

  let nums3 = [1, 6, 3]
  nextPermutation(nums3)
  expect(nums3).toEqual([3, 1, 6])

  let nums4 = [1, 2, 3, 5, 4]
  nextPermutation(nums4)
  expect(nums4).toEqual([1, 2, 4, 3, 5])

  let nums5 = [5, 4, 3, 2, 1]
  nextPermutation(nums5)
  expect(nums5).toEqual([1, 2, 3, 4, 5])
})

test('覆盖性测试', () => {
  let nums = [1, 2, 3, 4, 5]
  
  nextPermutation(nums)
  expect(nums).toEqual([1, 2, 3, 5, 4])

  nextPermutation(nums)
  expect(nums).toEqual([1, 2, 4, 3, 5])

  nextPermutation(nums)
  expect(nums).toEqual([1, 2, 4, 5, 3])

  nextPermutation(nums)
  expect(nums).toEqual([1, 2, 5, 3, 4])

  nextPermutation(nums)
  expect(nums).toEqual([1, 2, 5, 4, 3])

  nextPermutation(nums)
  expect(nums).toEqual([1, 3, 2, 4, 5])

  nextPermutation(nums)
  expect(nums).toEqual([1, 3, 2, 5, 4])

  nextPermutation(nums)
  expect(nums).toEqual([1, 3, 4, 2, 5])

  nextPermutation(nums)
  expect(nums).toEqual([1, 3, 4, 5, 2])

  nextPermutation(nums)
  expect(nums).toEqual([1, 3, 5, 2, 4])

  nextPermutation(nums)
  expect(nums).toEqual([1, 3, 5, 4, 2])

  nextPermutation(nums)
  expect(nums).toEqual([1, 4, 2, 3, 5])

  nextPermutation(nums)
  expect(nums).toEqual([1, 4, 2, 5, 3])

  nextPermutation(nums)
  expect(nums).toEqual([1, 4, 3, 2, 5])

  nextPermutation(nums)
  expect(nums).toEqual([1, 4, 3, 5, 2])

  nextPermutation(nums)
  expect(nums).toEqual([1, 4, 5, 2, 3])

  nextPermutation(nums)
  expect(nums).toEqual([1, 4, 5, 3, 2])

  nextPermutation(nums)
  expect(nums).toEqual([1, 5, 2, 3, 4])

  nextPermutation(nums)
  expect(nums).toEqual([1, 5, 2, 4, 3])

  nextPermutation(nums)
  expect(nums).toEqual([1, 5, 3, 2, 4])

  nextPermutation(nums)
  expect(nums).toEqual([1, 5, 3, 4, 2])

  nextPermutation(nums)
  expect(nums).toEqual([1, 5, 4, 2, 3])

  nextPermutation(nums)
  expect(nums).toEqual([1, 5, 4, 3, 2])

  nextPermutation(nums)
  expect(nums).toEqual([2, 1, 3, 4, 5])
})
