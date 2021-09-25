const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [1,2,3,4];
    const output = [2,4,4,4];
    assert.deepStrictEqual(testFunction(input), output);
  });
});
