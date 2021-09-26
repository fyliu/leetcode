const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = "RLRRLLRLRL";
    const output = 4;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 2', () => {
    const input = "RLLLLRRRLR";
    const output = 3;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 3', () => {
    const input = "LLLLRRRR";
    const output = 1;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 4', () => {
    const input = "RLRRRLLRLL";
    const output = 2;
    assert.deepStrictEqual(testFunction(input), output);
  });
});
