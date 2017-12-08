const Rat = require('../rat.js');
const Food = require('../food.js');
const assert = require('assert');

describe('rat', function(){
  let rat;
  beforeEach(function(){
      rat = new Rat();
      cheese = new Food('cheese',1);
  })
  it('should be able to touch food', function(){
    rat.touch(cheese)
    assert.strictEqual(cheese.poison, true)
  })
})
