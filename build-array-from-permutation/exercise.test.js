const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [0,2,1,5,3,4];
    const output = [0,1,2,4,5,3];
    assert.deepStrictEqual(output, testFunction(input));
  });
});
