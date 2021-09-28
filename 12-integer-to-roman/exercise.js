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
  let roman = ""
  let digitStart = 0

  while (num !== 0) {
    roman = romanDigit(num % 10, romanDigits.substr(digitStart, digitStart+3)) + roman
    num = Math.floor(num/10)
    digitStart += 2
  }
  return roman
};

module.exports = intToRoman
