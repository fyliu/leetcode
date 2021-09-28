/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let base10 = 0
  while(head !== null) {
    base10 *= 2
    base10 += head.val
    head = head.next
  }
  return base10
};

module.exports = getDecimalValue
