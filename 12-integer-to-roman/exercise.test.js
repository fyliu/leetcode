const assert = require('assert');
const testFunction = require('./exercise');

const test = (input, output) => {
  assert.deepStrictEqual(testFunction(input), output);
}

describe('Test suite', () => {
  it('test Roman', () => {
    test(1, "I")
    test(2, "II")
    test(3, "III")
    test(4, "IV")
    test(5, "V")
    test(6, "VI")
    test(7, "VII")
  });
});
