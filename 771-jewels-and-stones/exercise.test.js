const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = ["aA","aAAbbbb"];
    const output = 3;
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 2', () => {
    const input = ["z","ZZ"];
    const output = 0;
    assert.deepStrictEqual(testFunction(...input), output);
  });
});
