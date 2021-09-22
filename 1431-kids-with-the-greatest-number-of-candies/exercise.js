/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  // what's the max amount of candies?
  const maxCandies = candies.reduce((max, val) => (val > max) ? val : max)
  // can each kid reach the max with extraCandies added?
  return candies.map((val) => (val + extraCandies >= maxCandies) ? true : false)
};

module.exports = kidsWithCandies
