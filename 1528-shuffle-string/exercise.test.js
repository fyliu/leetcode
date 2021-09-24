const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = ["codeleet",[4,5,6,7,0,2,1,3]];
    const output = "leetcode";
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 2', () => {
    const input = ["abc",[0,1,2]];
    const output = "abc";
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 3', () => {
    const input = ["aiohn",[3,1,4,2,0]];
    const output = "nihao";
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 4', () => {
    const input = ["aaiougrt",[4,0,2,6,7,3,1,5]];
    const output = "arigatou";
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 5', () => {
    const input = ["art",[1,0,2]];
    const output = "rat";
    assert.deepStrictEqual(testFunction(...input), output);
  });
});
