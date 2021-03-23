/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head) {
        return head;
    }
    var prev = head;
    var cur = prev.next;
    if (!cur) {
        return head;
    }
    var next = cur.next;
    head = cur;
    cur.next = prev;
    prev.next = next;

    while (next) {
        cur = next.next;
        if (!cur) {
            break;
        }
        prev.next = cur;
        prev = next;
        next = cur.next;
        cur.next = prev;
    }
    prev.next = next;

    return head;
};
// @lc code=end

module.exports = swapPairs;
