var shuffle = function(nums, n) {
  for(let i = 0; i < n; i++) {
    nums.splice(i*2+1, 0, nums[n+i])
    nums.splice(n+i+1, 1)
  }
  return nums
};

module.exports = shuffle
