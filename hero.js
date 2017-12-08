const Hero = function(name, favouriteFood){
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.health = 100;
  this.tasks = [];
}

Hero.prototype.introduction = function(){
  return `Hi, my name is ${this.name}.`;
}
Hero.prototype.eat = function(food){
  if (food.name === this.favouriteFood) {
    this.health += (1.5 * food.replenishment);
  }
  else {
    this.health += food.replenishment;
  }
}

Hero.prototype.listByDificulty = function(){
  return this.tasks.sort(function(task1, task2){
    return task2.dificultyLevel - task1.dificultyLevel;
  })
}
Hero.prototype.listByUrgency = function(){
  return this.tasks.sort(function(task1, task2){
    return task2.urgencyLevel - task1.urgencyLevel;
  })
}
Hero.prototype.listByReward = function(){
  return this.tasks.sort(function(task1, task2){
    return task2.reward - task1.reward;
  })
}
module.exports = Hero;
