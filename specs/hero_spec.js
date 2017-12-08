const Hero = require('../hero.js');
const assert = require('assert');
const Task = require('../task.js');
const Food = require('../food.js')
const Rat = require('../rat.js')

describe('hero', function(){
  let hero;
  let task;
  let cheese;
  let chips;
  let rat;

  beforeEach(function(){
    hero = new Hero('Me', 'chips');
    task = new Task(1,1,1,false);
    aDificultTask = new Task(2,1,1,false);
    anUrgentTask = new Task(1,2,1,false);
    aRewardingTask = new Task(1,1,2,false);
    cheese = new Food('cheese', 1);
    chips = new Food('chips', 1);
    rat = new Rat();
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
  });
  it('should be able to eat fav food, and health should go up by 1.5 times the replenishment val', function(){
    hero.eat(chips);
    assert.strictEqual(hero.health, 101.5);
  });
  it('should have a list sorted by dificulty', function(){
    hero.tasks.push(anUrgentTask);
    hero.tasks.push(aDificultTask);
    hero.tasks.push(aRewardingTask);
    const tasksByDificulty = hero.listByDificulty();
    const mostDificultTask = tasksByDificulty[0];
    assert.strictEqual(mostDificultTask, aDificultTask)
  })
  it('should have a list sorted by urgency', function(){
    hero.tasks.push(aDificultTask);
    hero.tasks.push(anUrgentTask);
    hero.tasks.push(aRewardingTask);
    const tasksByUrgency = hero.listByUrgency();
    const mostUrgentTask = tasksByUrgency[0];
    assert.strictEqual(mostUrgentTask, anUrgentTask)
  })
  it('should have a list sorted by reward', function(){
    hero.tasks.push(aDificultTask);
    hero.tasks.push(anUrgentTask);
    hero.tasks.push(aRewardingTask);
    const tasksByReward = hero.listByReward();
    const mostRewardingTask = tasksByReward[0];
    assert.strictEqual(mostRewardingTask, aRewardingTask)
  })
  it('should decrease health when eats poison', function(){
    rat.touch(cheese);
    hero.eat(cheese);
    assert.strictEqual(hero.health, 99);
  });
});
