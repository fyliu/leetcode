const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = "thequickbrownfoxjumpsoverthelazydog";
    const output = true;
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 2', () => {
    const input = "leetcode";
    const output = false;
    assert.deepStrictEqual(testFunction(input), output);
  });
});
