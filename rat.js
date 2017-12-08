const Rat = function(){
}
Rat.prototype.touch = function(food) {
  food.poison = true;
}
module.exports = Rat;
