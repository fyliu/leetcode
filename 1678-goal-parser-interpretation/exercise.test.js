const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = "G()(al)";
    const output = "Goal";
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 2', () => {
    const input = "G()()()()(al)";
    const output = "Gooooal";
    assert.deepStrictEqual(testFunction(input), output);
  });
  it('example 3', () => {
    const input = "(al)G(al)()()G";
    const output = "alGalooG";
    assert.deepStrictEqual(testFunction(input), output);
  });
});
