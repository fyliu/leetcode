const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = ["ab",["ad","bd","aaab","baa","badab"]];
    const output = 2;
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 2', () => {
    const input = ["abc",["a","b","c","ab","ac","bc","abc"]];
    const output = 7;
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 3', () => {
    const input = ["cad",["cc","acd","b","ba","bac","bad","ac","d"]];
    const output = 4;
    assert.deepStrictEqual(testFunction(...input), output);
  });
});
