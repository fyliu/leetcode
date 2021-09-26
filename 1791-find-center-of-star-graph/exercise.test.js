const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [[1,2],[2,3],[4,2]];
    const output = 2;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 2', () => {
    const input = [[1,2],[5,1],[1,3],[1,4]];
    const output = 1;
    assert.deepStrictEqual(testFunction(input), output);
  });
});
