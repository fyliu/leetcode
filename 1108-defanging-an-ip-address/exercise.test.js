const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = "1.1.1.1";
    const output = "1[.]1[.]1[.]1";
    assert.deepStrictEqual(testFunction(input), output);
  });
});
