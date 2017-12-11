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

  // let foodValue = food.replenishment;
  //
  // if(food.poison) {
  //   this.health -= foodValue;
  // } else {
  //     if(food.name === this.favouriteFood) {
  //       foodValue = foodValue * 1.5;
  //     }
  //
  //     this.health += foodValue;
  // }

  switch (food.poison){

  case (true):
    this.health -= food.replenishment;
    break;
  case (false):
    if (food.name === this.favouriteFood) {
      this.health += (1.5 * food.replenishment);
    }
    else {
      this.health += food.replenishment;
    }
    break;
  }
}

//hero.sortBy('dificultyLevel')

Hero.prototype.sortBy(value) {

  //let value = 'difficulty'

  //for(let item in task) {

  //}
  //

  return this.tasks.sort(function(task1,task2) {
    return task2[value] - task1[value];
  });
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
