const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [1,4,2,5,3];
    const output = 58;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 2', () => {
    const input = [1,2];
    const output = 3;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 3', () => {
    const input = [10,11,12];
    const output = 66;
    assert.deepStrictEqual(testFunction(input), output);
  });
});
