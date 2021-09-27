const isAllowed = (allowed, word) => {
  for(let i = 0; i < word.length; i++) {
    if(allowed.indexOf(word[i]) === -1) {
      return false
    }
  }
  return true
}
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  let count = 0

  for(let i = 0; i < words.length; i++) {
    if(isAllowed(allowed, words[i])) {
      count++
    }
  }
  return count
};

module.exports = countConsistentStrings
