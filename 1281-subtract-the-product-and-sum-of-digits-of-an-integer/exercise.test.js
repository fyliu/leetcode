const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = 234;
    const output = 15;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 2', () => {
    const input = 4421;
    const output = 21;
    assert.deepStrictEqual(testFunction(input), output);
  });
});
