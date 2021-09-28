const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('1', () => {
    const input = 1;
    const output = "I";
    assert.deepStrictEqual(testFunction(input), output);
  });
});
