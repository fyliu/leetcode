const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [[0,1,2,3,4],[0,1,2,2,1]];
    const output = [0,4,1,3,2];
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 2', () => {
    const input = [[1,2,3,4,0],[0,1,2,3,0]];
    const output = [0,1,2,3,4];
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 3', () => {
    const input = [[1],[0]];
    const output = [1];
    assert.deepStrictEqual(testFunction(...input), output);
  });
});
