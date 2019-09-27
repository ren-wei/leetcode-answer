/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
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
var addTwoNumbers = function(l1, l2) {
  // 对首位求和
  var sum = l1.val + l2.val
  var carry = 0 // 用于标记是否进位
  if (sum > 9) {
    carry = 1
    sum -= 10
  }
  var result = new ListNode(sum)
  var head = result
  l1 = l1.next
  l2 = l2.next
  // 对其他位求和
  while (l1 || l2) {
    if (l1 && l2) {
      sum = l1.val + l2.val + carry
    } else if (l1) {
      sum = l1.val + carry
    } else {
      sum = l2.val + carry
    }
    if (sum > 9) {
      carry = 1
      sum -= 10
    } else {
      carry = 0
    }
    head.next = new ListNode(sum)
    head = head.next
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  if (carry) {
    head.next = new ListNode(1)
  }
  return result
};

