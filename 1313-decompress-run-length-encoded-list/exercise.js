/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  let result = []
  for(let i = 0; i < nums.length; i += 2) {
    const decompressed = Array(nums[i]).fill(nums[i+1])
    result = result.concat(decompressed)
  }
  return result
};

module.exports = decompressRLElist
