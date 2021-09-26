const assert = require('assert');
const testFunction = require('./exercise');

describe('Test suite', () => {
  it('example 1', () => {
    const input = [["ParkingSystem", "addCar", "addCar", "addCar", "addCar"],[[1,1,0],[1],[2],[3],[1]]]
    const output = [null,true,true,false,false]

    assert.deepStrictEqual(testFunction(...input), output);
  });
});
