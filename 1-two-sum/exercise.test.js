const assert = require('assert');
const testFunction = require('./exercise');

const compareAsc = (a, b) => (a - b)

describe('Test suite', () => {
  it.only('example 1', () => {
    const nums = [2,7,11,15];
    const target = 9;
    const output = [0,1].sort(compareAsc);
    assert.deepStrictEqual(testFunction(nums, target).sort(compareAsc), output);
  });
});
