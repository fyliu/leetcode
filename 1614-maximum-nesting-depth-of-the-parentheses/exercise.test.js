const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = "(1+(2*3)+((8)/4))+1";
    const output = 3;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 2', () => {
    const input = "(1)+((2))+(((3)))";
    const output = 3;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 3', () => {
    const input = "1+(2*3)/(2-1)";
    const output = 1;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 4', () => {
    const input = "1";
    const output = 0;
    assert.deepStrictEqual(testFunction(input), output);
  });
});
