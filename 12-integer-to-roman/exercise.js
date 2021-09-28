const repeatChar = (c, times) => {
  let string = ""
  for(let i = 0; i < times; i++) {
    string += c
  }
  return string
}

const romanDigit = (digit, romanOneFiveTen) => {
  if(digit < 4) {
    return repeatChar(romanOneFiveTen[0], digit)
  } else if(digit < 5) {
    return romanOneFiveTen[0]+romanOneFiveTen[1]
  } else if(digit < 9) {
    return romanOneFiveTen[1] + intToRoman(digit - 5)
  } else if(digit < 10) {
    return romanOneFiveTen[0]+romanOneFiveTen[2]
  }
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  if(num < 10) {
    return romanDigit(num, "IVX")

  } else if(num < 40) {
    return repeatChar("X", Math.floor(num / 10)) + intToRoman(num % 10)
  } else if(num < 50) {
    return "XL" + intToRoman(num % 10)
  } else if(num < 90) {
    return "L" + intToRoman(num - 50)
  } else if(num < 100) {
    return "XC" + intToRoman(num - 90)

  } else if(num < 400) {
    return repeatChar("C", Math.floor(num / 100)) + intToRoman(num % 100)
  } else if(num < 500) {
    return "CD" + intToRoman(num - 400)
  } else if(num < 900) {
    return "D" + intToRoman(num - 500)
  } else if(num < 1000) {
    return "CM" + intToRoman(num - 900)

  } else {
    return repeatChar("M", Math.floor(num / 1000)) + intToRoman(num % 1000)
  }
};

module.exports = intToRoman
