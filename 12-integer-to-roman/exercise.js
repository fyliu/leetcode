const repeatI = (times) => {
  let string = ""
  for(let i = 0; i < times; i++) {
    string += "I"
  }
  return string
}

const repeatX = (times) => {
  let string = ""
  for(let i = 0; i < times; i++) {
    string += "X"
  }
  return string
}

const repeatC = (times) => {
  let string = ""
  for(let i = 0; i < times; i++) {
    string += "C"
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
  } else if(num < 40) {
    return repeatX(Math.floor(num / 10)) + intToRoman(num % 10)
  } else if(num < 50) {
    return "XL" + intToRoman(num % 10)
  } else if(num < 90) {
    return "L" + intToRoman(num - 50)
  } else if(num < 100) {
    return "XC" + intToRoman(num - 90)
  } else {
    return repeatC(Math.floor(num / 100)) + intToRoman(num % 100)
  }
};

module.exports = intToRoman
