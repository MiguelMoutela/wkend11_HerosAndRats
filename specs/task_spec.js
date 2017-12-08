const Task = require('../task.js');
const assert = require('assert');

describe('task', function() {
  let task;
  beforeEach(function(){
    task = new Task(1,1,1);
  });

  it('should have a dificultyLevel', function(){
    assert.strictEqual(task.dificultyLevel, 1);
  });

  it('should have a urgencyLevel', function(){
    assert.strictEqual(task.urgencyLevel, 1);
  });

  it('should have a reward', function() {
    assert.strictEqual(task.reward, 1);
  });

  it('should have a taskCompletion', function(){
    assert.strictEqual(task.taskCompletion, false);
  });

});
