/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  const product = n.toString().split("").reduce((product, val) => (product * val), 1)
  const sum = n.toString().split("").reduce((sum, val) => (sum + +val), 0)

  return product - sum
};

module.exports = subtractProductAndSum
