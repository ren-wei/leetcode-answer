/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (k < 2 || head === null) {
    return head
  }
  // 确定head的位置
  var start = head
  var end = head
  for (var i=0;i<k-1;i++) {
    end = end.next
    // 如果长度不够时，直接返回
    if (end === null) {
      return head
    }
  }
  head = end
  var nexthead = head.next
  end.next = null
  // 翻转前k个元素
  var pre = null
  var cur = start
  while (cur !== null) {
    var next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  start.next = reverseKGroup(nexthead, k)

  return head
}
// @lc code=end

