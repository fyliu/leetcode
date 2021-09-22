const swap = (list, i, j) => {
  [list[i], list[j]] = [list[j], list[i]]
}

const doSwaps = (list, startIndex) => {
  let currIndex = startIndex //0
  let endCondition = false
  let nextIndex = list[currIndex] //5

  while(!endCondition) {
    const nextSavedIndex = list[nextIndex] //4 3
    swap(list, currIndex, nextIndex)
    currIndex = nextIndex //5 4
    nextIndex = nextSavedIndex //4 3

    endCondition = nextIndex === startIndex
  }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {

  // for (let i = 0; i < nums.length; i++) {
  //   result[i] = nums[nums[i]]
  // }

  let index = 0
  while(index < nums.length) {
    const nextIndex = nums[index] + 1
    doSwaps(nums, index)
    index = nextIndex
  }

  return nums
};

module.exports = buildArray
