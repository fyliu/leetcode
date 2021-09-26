/**
 * @param {string} command
 * @return {string}
 */
var interprets = function(command) {
  let result = ""

  for(let i = 0; i < command.length; ) {
    if(command.startsWith("G", i)) {
      result += "G"
      i++
    } else if(command.startsWith("()", i)) {
      result += "o"
      i += 2
    } else if(command.startsWith("(al)", i)) {
      result += "al"
      i += 4
    } else {
      console.error("error")
      i++
    }
  }
  return result
};

module.exports = interprets
