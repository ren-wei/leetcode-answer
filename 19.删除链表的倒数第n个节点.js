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
  var len = 0
  var node = head
  // 获取长度
  while (node !== null) {
    node = node.next
    len++
  }
  // 如果要删除的位置为头节点
  if (len === n) {
    return head.next
  }
  // 获取要删除的位置并删除
  node = head
  var index = len - n
  var prev
  for (var i=0;i<index;i++) {
    prev = node
    node = node.next
  }
  prev.next = node.next

  return head
}
// @lc code=end

