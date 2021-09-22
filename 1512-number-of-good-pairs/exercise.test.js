const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [1,2,3,1,1,3];
    const output = 4;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 2', () => {
    const input = [1,1,1,1];
    const output = 6;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 3', () => {
    const input = [1,2,3];
    const output = 0;
    assert.deepStrictEqual(testFunction(input), output);
  });
});
