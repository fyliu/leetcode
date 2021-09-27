/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  let letters = Array(26).fill(false)
  for(let i = 0; i < sentence.length; i++) {
    const index = sentence.charCodeAt(i) - "a".charCodeAt(0)
    letters[index] = true
  }
  for(let i = 0; i < 26; i++) {
    if(letters[i] === false) return false
  }
  return true
};

module.exports = checkIfPangram
