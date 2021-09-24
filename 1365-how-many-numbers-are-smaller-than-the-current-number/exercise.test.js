const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [8,1,2,2,3];
    const output = [4,0,1,1,3];
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 2', () => {
    const input = [6,5,4,8];
    const output = [2,1,0,3];
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 3', () => {
    const input = [7,7,7,7];
    const output = [0,0,0,0];
    assert.deepStrictEqual(testFunction(input), output);
  });
});
