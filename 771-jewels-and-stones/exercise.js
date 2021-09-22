/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  // convert stones to string
  // accumulate numbers of stones that are one of the jewels
  return stones.split('').reduce((numJewels, stone) => (jewels.includes(stone)) ? numJewels + 1 : numJewels, 0)
};

module.exports = numJewelsInStones
