const assert = require('assert');
const testFunction = require('./exercise');

const test = (input, output) => {
  assert.deepStrictEqual(testFunction(input), output);
}

describe('Test suite', () => {
  it('test Roman', () => {
    test(1, "I")
    test(2, "II")
    test(3, "III")
    test(4, "IV")
    test(5, "V")
    test(6, "VI")
    test(7, "VII")
    test(8, "VIII")
    test(9, "IX")
    test(10, "X")
    test(11, "XI")
    test(12, "XII")
    test(14, "XIV")
    test(15, "XV")
    test(19, "XIX")
    test(20, "XX")
    test(21, "XXI")
    test(24, "XXIV")
    test(29, "XXIX")
    test(30, "XXX")
    test(40, "XL")
    test(50, "L")
    test(60, "LX")
    test(80, "LXXX")
    test(90, "XC")
    test(100, "C")
    test(200, "CC")
    test(400, "CD")
    test(500, "D")
  });
});
