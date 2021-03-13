const divide = require('../29.两数相除')

test('基本测试', () => {
  expect(divide(7, 1)).toBe(7)
  expect(divide(8, 2)).toBe(4)
  expect(divide(9, -1)).toBe(-9)
  expect(divide(-9, -1)).toBe(9)
  expect(divide(119, -1)).toBe(-119)
  expect(divide(1000000024, 10)).toBe(100000002)
  expect(divide(2147483647, 2)).toBe(1073741823)
  expect(divide(-2147483648, -1)).toBe(2147483647)
})
