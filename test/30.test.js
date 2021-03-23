const findSubstring = require('../30.串联所有单词的子串');

test('基本测试', () => {
    expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9]);
    expect(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'good'])).toEqual([8]);
    expect(findSubstring('a', ['a'])).toEqual([0]);
    expect(findSubstring('aaaaaaaa', ['aa', 'aa', 'aa'])).toEqual([0, 1, 2]);
});
