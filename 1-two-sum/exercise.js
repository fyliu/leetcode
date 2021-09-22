var twoSum = function(nums, target) {

  let hashmap = {}

  for (const [index, val] of nums.entries()) {
    // check if the value is already complementary to something
    if(hashmap.hasOwnProperty(val)) {
      return([index, hashmap[val]])
    }

    // remember the complementary value needed for the solution and the index
    const difference = target - val
    hashmap[difference] = index
  }

  /**
   * simple solution
   */
  // for (const [i, a] of nums.entries()) {
  //     for (const [j, b] of nums.entries()) {
  //         if (i === j) continue
  //         if ((a + b) === target) {
  //             return [i, j]
  //         }
  //     }
  // }
};

module.exports = twoSum
