const Hero = require('../hero.js');
const assert = require('assert');
const Task = require('../task.js');
const Food = require('../food.js')

describe('hero', function(){
  let hero;
  let task;
  let cheese;
  beforeEach(function(){
    hero = new Hero('Me', 'chips');
    task = new Task(1,1,1,false);
    cheese = new Food('cheese', 1);
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
  });
  it('should have a task list', function(){
    assert.deepEqual(hero.tasks, []);
  });
  it('should be able to eat food, and health should go up', function(){
    hero.eat(cheese);
    assert.strictEqual(hero.health, 101);
  })
});
