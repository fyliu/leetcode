const assert = require('assert');
const testFunction = require('./mergeInterval')

describe('Test suite', () => {
  it('works for one interval', () => {
    const input = [[1, 3]];
    const output = [[1, 3]];
    assert.deepStrictEqual(output, testFunction(input));
  });
  it('works for two non-overlapping intervals', () => {
    const input = [
      [1, 3],
      [5, 7],
    ];
    const output = [
      [1, 3],
      [5, 7],
    ];
    assert.deepStrictEqual(output, testFunction(input));
  });
  it('merges two overlapping intervals', () => {
    const input = [
      [1, 3],
      [2, 4],
    ];
    const output = [[1, 4]];
    assert.deepStrictEqual(output, testFunction(input));
  });
  it('merges three overlapping intervals', () => {
    const input = [
      [1, 3],
      [2, 4],
      [3, 6],
    ];
    const output = [[1, 6]];
    assert.deepStrictEqual(output, testFunction(input));
  });
  it('solves example 1', () => {
    const input = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    const output = [
      [1, 6],
      [8, 10],
      [15, 18],
    ];
    assert.deepStrictEqual(output, testFunction(input));
  });
  it('solves example 2', () => {
    const input = [
      [1, 4],
      [4, 5],
    ];
    const output = [[1, 5]];
    assert.deepStrictEqual(output, testFunction(input));
  });
  it('solves unsorted intervals', () => {
    const input = [
      [4, 5],
      [1, 4],
    ];
    const output = [[1, 5]];
    assert.deepStrictEqual(output, testFunction(input));
  });
  it('merges same intervals', () => {
    const input = [
      [1, 4],
      [1, 4],
    ];
    const output = [[1, 4]];
    assert.deepStrictEqual(output, testFunction(input));
  });
  it('merges inclusive intervals', () => {
    const input = [
      [1, 4],
      [2, 3],
    ];
    const output = [[1, 4]];
    assert.deepStrictEqual(output, testFunction(input));
  });
});
