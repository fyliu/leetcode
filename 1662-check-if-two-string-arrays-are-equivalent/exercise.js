const represent = (array) => {
  return array.join("")
}

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
  return represent(word1) === represent(word2)
};

module.exports = arrayStringsAreEqual
