const assert = require('assert');
const testFunction = require('./exercise');

const test = (input, output) => {
  assert.deepStrictEqual(testFunction(input), output);
}

describe('Test suite', () => {
  it('test Roman', () => {
    test(1, "I")
  });
});
