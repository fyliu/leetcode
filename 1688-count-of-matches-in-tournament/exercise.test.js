const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = 7
    const output = 6
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 1', () => {
    const input = 14
    const output = 13
    assert.deepStrictEqual(testFunction(input), output);
  });
});
