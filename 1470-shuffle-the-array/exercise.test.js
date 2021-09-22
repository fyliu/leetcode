const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [[2,5,1,3,4,7],3]
    const output = [2,3,5,4,1,7];
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 2', () => {
    const input = [[1,2,3,4,4,3,2,1],4]
    const output = [1,4,2,3,3,2,4,1];
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 3', () => {
    const input = [[1,1,2,2,],2]
    const output = [1,2,1,2];
    assert.deepStrictEqual(testFunction(...input), output);
  });
});
