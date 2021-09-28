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
  } else if(num >= 5 && num < 9) {
    return "V" + repeatI(num - 5)
  } else if(num === 9) {
    return "IX"
  } else if(num === 10) {
    return "X"
  } else {
    return "XI"
  }
};

module.exports = intToRoman
