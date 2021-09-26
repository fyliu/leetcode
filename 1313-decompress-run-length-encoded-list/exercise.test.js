const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = 14;
    const output = 6;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 2', () => {
    const input = 8;
    const output = 4;
    assert.deepStrictEqual(testFunction(input), output);
  });
});
