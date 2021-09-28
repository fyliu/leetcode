const assert = require('assert');
const testFunction = require('./exercise');
const {buildTree} = require('../helpers')

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
