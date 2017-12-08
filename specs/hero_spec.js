const Hero = require('../hero.js');
const assert = require('assert');

describe('hero', function(){
  let hero;
  beforeEach(function(){
    hero = new Hero('Me', 'chips')
});
it('should have a name',function(){
  assert.strictEqual(hero.name, 'Me')
});
it('should have a favourite foods',function(){
  assert.strictEqual(hero.favouriteFood, 'chips')
});
it('should have full health',function(){
  assert.strictEqual(hero.health, 100)
});
it('should introduce itself', function(){
  assert.strictEqual(hero.introduction(), 'Hi, my name is Me.')
})
});
