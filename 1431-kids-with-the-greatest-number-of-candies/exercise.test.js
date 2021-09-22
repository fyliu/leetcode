const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [[2,3,5,1,3],3];
    const output = [true,true,true,false,true];
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 2', () => {
    const input = [[4,2,1,1,2],1];
    const output = [true,false,false,false,false];
    assert.deepStrictEqual(testFunction(...input), output);
  });
  it('example 3', () => {
    const input = [[12,1,12],10];
    const output = [true,false,true];
    assert.deepStrictEqual(testFunction(...input), output);
  });
});
