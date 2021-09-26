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

module.exports = buildTree
