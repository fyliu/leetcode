const assert = require('assert');
const testFunction = require('./exercise');

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

describe('Test suite', () => {
  it('example 1', () => {
    const input = buildList([1,0,1]);
    const output = 5;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 2', () => {
    const input = buildList([0]);
    const output = 0;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 3', () => {
    const input = buildList([1]);
    const output = 1;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it.only('example 4', () => {
    const input = buildList([1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]);
    const output = 18880;
    assert.deepStrictEqual(testFunction(input), output);
  });
});
