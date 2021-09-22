const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [1,2,1];
    const output = [1,2,1,1,2,1];
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 2', () => {
    const input = [1,3,2,1];
    const output = [1,3,2,1,1,3,2,1];
    assert.deepStrictEqual(testFunction(input), output);
  });
});
