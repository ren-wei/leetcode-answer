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
  function reverse(head) {
    var pre = null
    var cur = head
    while (cur !== null) {
      var next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    return pre
  }

  var dummy = new ListNode(0)
  dummy.next = head

  var pre = dummy
  var end = dummy
  while (end.next !== null) {
    for (var i=0;i<k;i++) {
      end = end.next
      if (end === null) {
        return dummy.next
      }
    }
    var start = pre.next
    var next = end.next
    end.next = null
    pre.next = reverse(start)
    start.next = next

    pre = start
    end = pre
  }

  return dummy.next
}
// @lc code=end

