const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [5,0];
    const output = 8;
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 2', () => {
    const input = [4,3];
    const output = 8;
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 3', () => {
    const input = [1,7];
    const output = 7;
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 4', () => {
    const input = [10,5];
    const output = 2;
    assert.deepStrictEqual(testFunction(...input), output);
  });
});
