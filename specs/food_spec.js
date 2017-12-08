const Food = require('../food.js');
const assert = require('assert');

describe('Food', function(){
  let food;
  beforeEach(function (){
    food = new Food('cheese',1);
  });
  it('should have a name', function (){
    assert.strictEqual(food.name, 'cheese');
  })
  it('should have a replenishment', function () {
    assert.strictEqual(food.replenishment, 1);
  })
})
