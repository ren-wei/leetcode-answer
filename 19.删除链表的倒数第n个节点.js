/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var node = head
  for (var i=0;i<n;i++) {
    node = node.next
  }
  if (node === null) {
    return head.next
  }
  var target = head
  while (node.next !== null) {
    target = target.next
    node = node.next
  }
  target.next = target.next.next

  return head
}
// @lc code=end

