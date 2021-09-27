const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [["ab","c"],["a","bc"]];
    const output = true;
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 2', () => {
    const input = [["a","cb"],["ab","c"]];
    const output = false;
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 3', () => {
    const input = [["abc","d","defg"],["abcddefg"]];
    const output = true;
    assert.deepStrictEqual(testFunction(...input), output);
  });
});
