var runningSum = function(nums) {
  let sums = []
  for(let [i, val] of nums.entries()) {
    sums[i] = (i === 0) ? val : sums[i-1] + val
  }
  return sums
};

module.exports = runningSum
