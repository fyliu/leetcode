const repeatChar = (c, times) => {
  let string = ""
  for(let i = 0; i < times; i++) {
    string += c
  }
  return string
}

const romanDigit = (digit, romanOneFiveTen) => {
  if(digit < 1) {
    return ""
  }
  if(digit < 4) {
    return repeatChar(romanOneFiveTen[0], digit)
  } else if(digit < 5) {
    return romanOneFiveTen[0] + romanOneFiveTen[1]
  } else if(digit < 9) {
    return romanOneFiveTen[1] + romanDigit(digit - 5, romanOneFiveTen)
  } else {
    return romanOneFiveTen[0] + romanOneFiveTen[2]
  }
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const romanDigits = "IVXLCDM??"

  return romanDigit(Math.floor(num / 1000), romanDigits.substr(6, 9))
    + romanDigit(Math.floor((num % 1000) / 100), romanDigits.substr(4, 7))
    + romanDigit(Math.floor((num % 100) / 10), romanDigits.substr(2, 5))
    + romanDigit(num % 10, romanDigits.substr(0, 3))
};

module.exports = intToRoman
