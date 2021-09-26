const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [[["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],"color","silver"];
    const output = 1;
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 2', () => {
    const input = [[["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],"type","phone"];
    const output = 2;
    assert.deepStrictEqual(testFunction(...input), output);
  });
});
