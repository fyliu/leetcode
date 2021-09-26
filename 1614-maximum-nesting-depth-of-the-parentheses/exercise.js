/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let maxDepth = 0
  let depth = 0

  for(let i = 0; i < s.length; i++) {
    if(s[i] === "(") {
      depth++
      if(depth > maxDepth) {
        maxDepth = depth
      }
    } else if(s[i] === ")") {
      depth--
    }
  }
  return maxDepth
};

module.exports = maxDepth
