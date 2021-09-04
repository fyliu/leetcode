const Mocha = require('mocha')
const assert = require('assert')
const mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)

describe('Test suite', function() {
  it('works for one interval', () => {
    const input = [[1,3]]
    const output = [[1,3]]
    assert.deepEqual(output, mergeIntervals(input))
  })
  it('works for two non-overlapping intervals', () => {
    const input = [[1,3], [5,7]];
    const output = [[1,3], [5,7]];
    assert.deepEqual(output, mergeIntervals(input))
  })
  it('merges two overlapping intervals', () => {
    const input = [[1,3], [2,4]]
    const output = [[1,4]]
    assert.deepEqual(output, mergeIntervals(input))
  })
  it('merges three overlapping intervals', () => {
    const input = [[1,3], [2,4], [3, 6]]
    const output = [[1,6]]
    assert.deepEqual(output, mergeIntervals(input))
  })
  it('solves example 1', () => {
    const input = [[1,3], [2,6], [8, 10], [15,18]]
    const output = [[1,6], [8,10], [15,18]]
    assert.deepEqual(output, mergeIntervals(input))
  })
  it('solves example 2', () => {
    const input = [[1,4], [4,5]]
    const output = [[1,5]]
    assert.deepEqual(output, mergeIntervals(input))
  })
})

mocha.run()

const mergeIntervals = (input) => {
  let output = []
  for (let interval of input) {
    let hasOverlap = false
    for(let i = 0; i < output.length; i++) {
      if(overlap(output[i], interval)) {
        const newInterval = merge(output[i], interval)
        replaceInterval(output, i, newInterval)
        hasOverlap = true
        break
      }
    }
    if(!hasOverlap) output.push(interval)
  }
  return output
}

const overlap = (left, right) => {
  return (left[0] < right[0] && left[1] >= right[0])
}

const merge = (left, right) => {
  return [left[0], right[1]]
}

const replaceInterval = (array, index, interval) => {
  array.splice(index, 1, interval)
}
