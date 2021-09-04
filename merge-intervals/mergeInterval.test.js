const Mocha = require('mocha');
const assert = require('assert');
const mocha = new Mocha();

//mocha.suite.emit('pre-require', this, 'solution', mocha)

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

mocha.run();

const merge = (input) => {
  let output = [];
  input.sort((a, b) => a[0] - b[0]);
  for (let interval of input) {
    let hasOverlap = false;
    for (let i = 0; i < output.length; i++) {
      if (overlap(output[i], interval)) {
        const newInterval = mergeTwo(output[i], interval);
        replaceInterval(output, i, newInterval);
        hasOverlap = true;
        break;
      }
    }
    if (!hasOverlap) output.push(interval);
  }
  return output;
};

const overlap = (left, right) => {
  return left[0] <= right[0] && left[1] >= right[0];
};

const mergeTwo = (left, right) => {
  return [Math.min(left[0], right[0]), Math.max(left[1], right[1])];
};

const replaceInterval = (array, index, interval) => {
  array.splice(index, 1, interval);
};

const testFunction = merge;
