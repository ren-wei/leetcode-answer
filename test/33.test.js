const search = require('../33.搜索旋转排序数组')

test("33.搜索旋转排序数组", () => {
    expect(search([4,5,6,7,0,1,2], 0)).toBe(4)
    expect(search([4,5,6,7,0,1,2], 3)).toBe(-1)
    expect(search([4,5,6,0,1,2,3], 2)).toBe(5)
    expect(search([4,5],5)).toBe(1)
    expect(search([1,3],1)).toBe(0)
    expect(search([1], 0)).toBe(-1)
    expect(search([5,1,3], 5)).toBe(0)
})
