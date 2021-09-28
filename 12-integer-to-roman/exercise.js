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
  if(num < 1000) {
    return romanDigit(Math.floor(num / 100), "CDM") + romanDigit(Math.floor((num % 100) / 10), "XLC") + romanDigit(num % 10, "IVX")

  } else {
    return repeatChar("M", Math.floor(num / 1000)) + intToRoman(num % 1000)
  }
};

module.exports = intToRoman
