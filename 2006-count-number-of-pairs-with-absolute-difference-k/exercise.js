const absDifference = (a, b) => {
  return Math.abs(b - a)
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
  let count = 0
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      count += (absDifference(nums[i], nums[j]) === k) ? 1 : 0
    }
  }
  return count
};

module.exports = countKDifference
