const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = ["--X","X++","X++"];
    const output = 1;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 2', () => {
    const input = ["++X","++X","X++"];
    const output = 3;
    assert.deepStrictEqual(testFunction(input), output);
  });
});
