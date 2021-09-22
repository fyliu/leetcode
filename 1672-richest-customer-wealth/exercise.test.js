const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [[1,2,3],[3,2,1]];
    const output = 6;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 2', () => {
    const input = [[1,5],[7,3],[3,5]];
    const output = 10;
    assert.deepStrictEqual(testFunction(input), output);
  });
});
