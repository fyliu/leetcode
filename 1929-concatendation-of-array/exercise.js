var getConcatenation = function(nums) {
  /**
   * loop solution
   */
  // let ans = []
  // const nums_length = nums.length

  // for(let i = 0; i < 2 * nums_length; i++) {
  //   ans.push(nums[i % nums_length])
  // }
  // return ans

  /**
   * js language solution
   */
  return nums.concat(nums)
};

module.exports = getConcatenation
