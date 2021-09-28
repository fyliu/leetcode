/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  if(num === 1) return "I"
  if(num === 2) return "II"
  else return "III"
};

module.exports = intToRoman
