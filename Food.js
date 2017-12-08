const Food = function(name, replenishment){
  this.name = name;
  this.replenishment = replenishment;
  this.poison = false;
}

module.exports = Food;
