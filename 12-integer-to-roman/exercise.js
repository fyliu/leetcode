const repeatI = (times) => {
  let string = ""
  for(let i = 0; i < times; i++) {
    string += "I"
  }
  return string
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  if(num < 4) {
    return repeatI(num)
  } else if(num === 4) {
    return "IV"
  } else if(num === 5) {
    return "V"
  } else if(num === 6) {
    return "VI"
  } else {
    return "VII"
  }
};

module.exports = intToRoman
