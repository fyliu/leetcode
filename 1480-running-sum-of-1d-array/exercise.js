var runningSum = function(nums) {
  let sums = []
  for(let i = 0; i < nums.length; i++) {
    sums[i] = (i === 0) ? nums[i] : sums[i-1] + nums[i]
  }
  return sums
};

module.exports = runningSum
