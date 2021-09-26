const attributeIndex = (name) => {
  switch (name) {
    case "type":
      return 0
    case "color":
      return 1
    case "name":
    default:
      return 2
  }
}

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
  let matches = 0

  for(let i = 0; i < items.length; i++) {
    matches += items[i][attributeIndex(ruleKey)] === ruleValue ? 1 : 0
  }
  return matches
};

module.exports = countMatches
