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
})

mocha.run()


const mergeIntervals = (input) => {
  return input
}

