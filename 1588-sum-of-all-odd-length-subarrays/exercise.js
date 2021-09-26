/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  let sum = 0

  for(let subarraySize = 1; subarraySize <= arr.length; subarraySize += 2) {
    for(let i = 0; i < arr.length - subarraySize + 1; i++) {
      sum += arr.slice(i, i + subarraySize).reduce((sum, val) => (sum + val), 0)
    }
  }

  return sum
};

module.exports = sumOddLengthSubarrays
