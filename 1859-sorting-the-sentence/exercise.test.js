const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = "is2 sentence4 This1 a3";
    const output = "This is a sentence";
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 2', () => {
    const input = "Myself2 Me1 I4 and3";
    const output = "Me Myself and I";
    assert.deepStrictEqual(testFunction(input), output);
  });
});
