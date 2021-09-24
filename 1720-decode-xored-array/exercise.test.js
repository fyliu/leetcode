const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [[1,2,3],1];
    const output = [1,0,2,1];
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 2', () => {
    const input = [[6,2,7,3],4];
    const output = [4,2,0,7,4];
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 3', () => {
    const input = [[6,2,7,3],4];
    const output = [4,2,0,7,4];
    assert.deepStrictEqual(testFunction(...input), output);
  });
});
