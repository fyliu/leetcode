const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [1,2,3,4];
    const output = [1,3,6,10];
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 2', () => {
    const input = [1,1,1,1,1];
    const output = [1,2,3,4,5];
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 3', () => {
    const input = [3,1,2,10,1];
    const output = [3,4,6,16,17];
    assert.deepStrictEqual(testFunction(input), output);
  });
});
