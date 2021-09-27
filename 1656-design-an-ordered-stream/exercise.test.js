const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [["OrderedStream","insert","insert","insert","insert","insert"],[[5],[3,"ccccc"],[1,"aaaaa"],[2,"bbbbb"],[5,"eeeee"],[4,"ddddd"]]];
    const output = [null,[],["aaaaa"],["bbbbb","ccccc"],[],["ddddd","eeeee"]];
    assert.deepStrictEqual(testFunction(...input), output);
  });
});
