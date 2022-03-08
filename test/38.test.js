const countAndSay = require('../38.外观数列');

test('38.外观数列', () => {
    expect(countAndSay(1)).toBe('1');
    expect(countAndSay(2)).toBe('11');
    expect(countAndSay(3)).toBe('21');
    expect(countAndSay(4)).toBe('1211');
    expect(countAndSay(5)).toBe('111221');
    expect(countAndSay(6)).toBe('312211');
    expect(countAndSay(7)).toBe('13112221');
    expect(countAndSay(8)).toBe('1113213211');
});
