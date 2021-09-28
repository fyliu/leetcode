function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const buildTree = (values) => {
  let root = new TreeNode(values[0])
  let queue = [root]

  for(let i = 0; i < values.length; i+=2) {
    if(i+1 < values.length) {
      queue[0].left = new TreeNode(values[i+1])
      queue.push(queue[0].left)
    }
    if(i+2 < values.length) {
      queue[0].right = new TreeNode(values[i+2])
      queue.push(queue[0].right)
    }
    queue.shift()
  }
  return root
}

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const buildList = (array) => {
  let head = new ListNode(array[0])
  let node = head
  if(array.length > 1) {
    for(let i = 1; i < array.length; i++) {
      node.next = new ListNode(array[i])
      node = node.next
    }
  }
  return head
}

module.exports = {buildTree, buildList}
