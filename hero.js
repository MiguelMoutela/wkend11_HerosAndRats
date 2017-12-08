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
  this.health += food.replenishment;
}

module.exports = Hero;
