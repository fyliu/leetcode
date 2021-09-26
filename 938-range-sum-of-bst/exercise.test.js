const assert = require('assert');
const testFunction = require('./exercise');

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

describe('Test suite', () => {
  it('example 1', () => {
    const root = buildTree([10,5,15,3,7,null,18])
    const input = [root,7,15];
    const output = 32;
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 2', () => {
    const root = buildTree([10,5,15,3,7,13,18,1,null,6])
    const input = [root,6,10];
    const output = 23;
    assert.deepStrictEqual(testFunction(...input), output);
  });
});
