/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  let stack = [root]
  let sum = 0

  while(stack.length > 0) {
    const node = stack.pop()

    if(node.val >= low && node.val <= high) {
      sum += node.val
    }

    if(node.left != null) {
      stack.push(node.left)
    }
    if(node.right != null) {
      stack.push(node.right)
    }
  }
  return sum
};

module.exports = rangeSumBST
