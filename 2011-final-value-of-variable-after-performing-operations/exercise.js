const applyOperation = (op, x) => {
  switch (op) {
    case "++X":
    case "X++":
      x++
      break
    default:
      x--
  }
  return x
}

var finalValueAfterOperations = function(operations) {
  let val = 0

  for(const operation of operations) {
    val = applyOperation(operation, val)
  }
  return val
}

var solution = function(input) {
  return finalValueAfterOperations(input)
};

module.exports = solution
