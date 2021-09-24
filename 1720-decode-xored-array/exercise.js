/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  let result = [first]

  for(let i = 0; i < encoded.length; i++) {
    result[i+1] = encoded[i] ^ result[i]
  }
  return result
};

// encoded[i] = arr[i] XOR arr[i + 1]
// 
// arr[i + 1] = encoded[i] XOR arr[i]

module.exports = decode
