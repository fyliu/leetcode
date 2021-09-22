const merge = (input) => {
  let output = [];
  input.sort((a, b) => a[0] - b[0]);
  for (let interval of input) {
    let hasOverlap = false;
    for (let i = 0; i < output.length; i++) {
      if (overlap(output[i], interval)) {
        const newInterval = mergeTwo(output[i], interval);
        replaceInterval(output, i, newInterval);
        hasOverlap = true;
        break;
      }
    }
    if (!hasOverlap) output.push(interval);
  }
  return output;
};

const overlap = (left, right) => {
  return left[0] <= right[0] && left[1] >= right[0];
};

const mergeTwo = (left, right) => {
  return [Math.min(left[0], right[0]), Math.max(left[1], right[1])];
};

const replaceInterval = (array, index, interval) => {
  array.splice(index, 1, interval);
};

module.exports = merge;

