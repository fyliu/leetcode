/**
 * @param {number} n
 */
var OrderedStream = function(n) {
  this.stream = new Array(5)
  this.streamIndex = 0
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
  let result = []
  this.stream[idKey-1] = value
  while(this.stream[this.streamIndex] !== undefined) {
    result.push(this.stream[this.streamIndex])
    this.streamIndex++
  }
  return result
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
const testOrderedStream = (commands, inputs) => {
  let result = [null]

  var obj = new OrderedStream(...inputs[0])
  const stream = inputs.slice(1).map((inputs) => {
    return obj.insert(...inputs)
  })
  result = result.concat(stream)
  return result
}

module.exports = testOrderedStream
