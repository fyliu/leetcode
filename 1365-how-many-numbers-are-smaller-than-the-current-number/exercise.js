const numsSmaller = (nums, num) => {
  let count = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] < num) {
      count++
    }
  }
  return count
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let result = []
  for(let i = 0; i < nums.length; i++) {
    result[i] = numsSmaller(nums, nums[i])
  }
  return result
};

module.exports = smallerNumbersThanCurrent
