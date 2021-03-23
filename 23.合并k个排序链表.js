/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists.length) {
        return null;
    }
    if (lists.length === 1) {
        return lists[0];
    }
    var index = 0;
    var min = Infinity;
    var i = 0;
    while (i < lists.length) {
        if (lists[i] === null) {
            lists.splice(i, 1);
            continue;
        } else if (lists[i].val < min) {
            min = lists[i].val;
            index = i;
        }
        i++;
    }
    var head = lists[index];
    if (!lists.length) {
        return null;
    }
    lists[index] = lists[index].next;
    head.next = mergeKLists(lists);

    return head;
};
// @lc code=end

module.exports = mergeKLists;
