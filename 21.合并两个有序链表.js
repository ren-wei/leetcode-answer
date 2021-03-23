/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    }
    var head; var curl1; var curl2; var temp;
    if (l1.val < l2.val) {
        head = l1;
        temp = l1;
        curl1 = l1.next;
        curl2 = l2;
    } else {
        head = l2;
        temp = l2;
        curl1 = l1;
        curl2 = l2.next;
    }
    while (curl1 !== null && curl2 !== null) {
        if (curl1.val < curl2.val) {
            temp.next = curl1;
            temp = curl1;
            curl1 = curl1.next;
        } else {
            temp.next = curl2;
            temp = curl2;
            curl2 = curl2.next;
        }
    }
    if (curl1 === null) {
        temp.next = curl2;
    } else {
        temp.next = curl1;
    }

    return head;
};
// @lc code=end

module.exports = mergeTwoLists;
