/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  let sentenceArray = []
  const tokens = s.split(" ").map((word) => {
    sentenceArray[word[word.length-1] - 1] = word.substr(0, word.length-1)
  })
  return sentenceArray.join(" ")
};

module.exports = sortSentence
