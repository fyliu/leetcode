const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [0,2,1,5,3,4];
    const output = [0,1,2,4,5,3];
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 2', () => {
    const input = [5,0,1,2,3,4];
    const output = [4,5,0,1,2,3];
    assert.deepStrictEqual(testFunction(input), output);
  });
  it.skip('example 3', () => {
    const input = [3,2,1,0];
    const output = [0,1,2,3];
    assert.deepStrictEqual(testFunction(input), output);
  });
});
