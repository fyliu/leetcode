const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [[1,2,2,1],1];
    const output = 4;
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 2', () => {
    const input = [[1,3],3];
    const output = 0;
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 3', () => {
    const input = [[3,2,1,5,4],2];
    const output = 3;
    assert.deepStrictEqual(testFunction(...input), output);
  });
});
