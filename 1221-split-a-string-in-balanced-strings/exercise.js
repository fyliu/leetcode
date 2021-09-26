/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let count = 0
  let lCount = 0
  let rCount = 0

  for(let i = 0; i < s.length; i++) {
    if(s[i] === "L") {
      if(rCount === 0) {
        lCount++
      } else {
        rCount--
        if(rCount === 0) {
          count++
        }
      }
    } else {
      if(lCount === 0) {
        rCount++
      } else {
        lCount--
        if(lCount === 0) {
          count++
        }
      }
    }
  }

  return count
};

module.exports = balancedStringSplit
